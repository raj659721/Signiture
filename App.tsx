import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { SignatureProfile, TemplateType, SocialLink, SUPPORTED_FONTS, SOCIAL_PLATFORMS, LangCode, SavedProfile, AnimationType } from './types';
import { supabase } from './utils/supabase';
import { generateHtml, sanitizeHtml } from './utils/templates';
import { translations, getBrowserLang } from './utils/translations';
import { getProfileDefaults } from './utils/defaults';
import FormInput from './components/FormInput';
import { 
  Copy, Check, Layout, Palette, User, 
  Share2, Type as TypeIcon, 
  Plus, Trash2, Settings, Briefcase, Globe,
  Sun, Moon, Image as ImageIcon, ExternalLink,
  Target, QrCode, Save, FolderOpen, Share, HelpCircle, X, Shield, Wand2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const encodeBase64Utf8 = (str: string): string => {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
};

const decodeBase64Utf8 = (str: string): string => {
  return decodeURIComponent(
    Array.from(atob(str))
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
};

const TABS = [
  { id: 'details', icon: User },
  { id: 'social', icon: Share2 },
  { id: 'design', icon: Palette },
  { id: 'addons', icon: Settings },
  { id: 'marketing', icon: Target },
];

const LANGUAGES: { code: LangCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export default function App() {
  const [lang, setLang] = useState<LangCode>(getBrowserLang());
  const [profile, setProfile] = useState<SignatureProfile>(() => getProfileDefaults(getBrowserLang()));
  
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>(TemplateType.MODERN);
  const [activeTab, setActiveTab] = useState('details');
  const [isCopied, setIsCopied] = useState(false);
  const [isShareCopied, setIsShareCopied] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [previewDarkMode, setPreviewDarkMode] = useState(false);

  const [savedProfiles, setSavedProfiles] = useState<SavedProfile[]>([]);
  const [newProfileName, setNewProfileName] = useState('');
  
  const [isDark, setIsDark] = useState(() => 
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase.from('saved_profiles').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        setSavedProfiles(data.map(d => ({
          id: d.id,
          name: d.name,
          data: d.data,
          updatedAt: new Date(d.updated_at).getTime()
        })));
      }
    };
    fetchProfiles();

    const params = new URLSearchParams(window.location.search);
    const sharedConfig = params.get('config');
    if (sharedConfig) {
      try {
        const decoded = JSON.parse(decodeBase64Utf8(sharedConfig));
        if (decoded && typeof decoded === 'object' && decoded.fullName) {
          setProfile(decoded);
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } catch (e) { console.error("Invalid share link", e); }
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    setProfile(prev => {
      const currentDisclaimer = prev.addons.disclaimer;
      const isDefault = Object.values(translations).some(t => t.generatedContent.disclaimer === currentDisclaimer) || currentDisclaimer === '';
      
      if (isDefault) {
        return {
          ...prev,
          addons: {
            ...prev.addons,
            disclaimer: translations[lang].generatedContent.disclaimer
          }
        };
      }
      return prev;
    });
  }, [lang]);

  const generatedHtml = useMemo(() => 
    generateHtml(profile, activeTemplate, translations[lang]),
    [profile, activeTemplate, lang]
  );

  const t = translations[lang];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (file: File, field: 'logoUrl' | 'avatarUrl') => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      if (data?.publicUrl) {
        setProfile(prev => ({ ...prev, [field]: data.publicUrl }));
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please check your connection or try a smaller file.');
    }
  };

  const handleStyleChange = (key: keyof typeof profile.style, value: any) => {
    setProfile(prev => ({ ...prev, style: { ...prev.style, [key]: value } }));
  };

  const handleAddonChange = (key: keyof typeof profile.addons, value: any) => {
    setProfile(prev => ({ ...prev, addons: { ...prev.addons, [key]: value } }));
  };
  
  const handleMarketingChange = (key: keyof typeof profile.marketing, value: string) => {
    setProfile(prev => ({ ...prev, marketing: { ...prev.marketing, [key]: value } }));
  };

  const addSocial = () => {
    setProfile(prev => ({
      ...prev,
      socials: [...prev.socials, { platform: 'website', url: '' }]
    }));
  };

  const removeSocial = (index: number) => {
    setProfile(prev => ({
      ...prev,
      socials: prev.socials.filter((_, i) => i !== index)
    }));
  };

  const updateSocial = (index: number, key: keyof SocialLink, value: string) => {
    const newSocials = [...profile.socials];
    newSocials[index] = { ...newSocials[index], [key]: value };
    setProfile(prev => ({ ...prev, socials: newSocials }));
  };

  const handleCopy = () => {
    const blob = new Blob([generatedHtml], { type: 'text/html' });
    const textBlob = new Blob([generatedHtml], { type: 'text/plain' });
    const data = [new ClipboardItem({ 
      "text/html": blob,
      "text/plain": textBlob 
    })];
    
    navigator.clipboard.write(data).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(() => {
        navigator.clipboard.writeText(generatedHtml);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleSaveProfile = async () => {
    if (!newProfileName.trim()) return;
    
    const newProfileData = {
      name: newProfileName,
      data: profile
    };

    const { data, error } = await supabase.from('saved_profiles').insert([newProfileData]).select();
    
    if (!error && data && data.length > 0) {
      const inserted = data[0];
      const newSaved: SavedProfile = {
        id: inserted.id,
        name: inserted.name,
        data: inserted.data,
        updatedAt: new Date(inserted.updated_at).getTime()
      };
      setSavedProfiles([newSaved, ...savedProfiles]);
    } else {
      console.error("Failed to save profile", error);
    }
    
    setNewProfileName('');
  };

  const handleLoadProfile = (id: string) => {
    const found = savedProfiles.find(p => p.id === id);
    if (found) setProfile(found.data);
  };

  const handleDeleteProfile = async (id: string) => {
    const { error } = await supabase.from('saved_profiles').delete().eq('id', id);
    if (!error) {
      const updated = savedProfiles.filter(p => p.id !== id);
      setSavedProfiles(updated);
    } else {
      console.error("Failed to delete profile", error);
    }
  };

  const handleShare = async () => {
    const config = encodeBase64Utf8(JSON.stringify(profile));
    const url = `${window.location.origin}${window.location.pathname}?config=${encodeURIComponent(config)}`;
    
    try {
      await navigator.clipboard.writeText(url);
      setIsShareCopied(true);
      setTimeout(() => setIsShareCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setIsShareCopied(true);
        setTimeout(() => setIsShareCopied(false), 2000);
      } catch (e) {
        console.error('Failed to copy URL', e);
        prompt('Copia questo link:', url);
      }
      document.body.removeChild(textArea);
    }
  };

    return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold tracking-tight">{t.title}</h1>
              <p className="text-[10px] text-muted-foreground uppercase">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as LangCode)}
              className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
            >
              {LANGUAGES.map(l => (
                <option key={l.code} value={l.code} className="dark:bg-gray-800">{l.label}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card>
              <CardHeader className="py-4 border-b">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" /> {t.labels.saveProfile}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex gap-2 mb-4">
                  <Input 
                    value={newProfileName}
                    onChange={(e) => setNewProfileName(e.target.value)}
                    placeholder={t.placeholders.profileName}
                  />
                  <Button onClick={handleSaveProfile} size="icon"><Save className="w-4 h-4" /></Button>
                </div>
                {savedProfiles.length > 0 && (
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {savedProfiles.map(p => (
                      <div key={p.id} className="flex items-center justify-between p-2 rounded-md border text-sm">
                        <span className="font-medium truncate max-w-[150px]">{p.name}</span>
                        <div className="flex gap-1">
                          <Button variant="secondary" size="sm" onClick={() => handleLoadProfile(p.id)}>{t.labels.loadProfile}</Button>
                          <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDeleteProfile(p.id)}><Trash2 className="w-3 h-3" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start overflow-x-auto h-auto p-1 mb-4">
                {TABS.map(tab => {
                   const Icon = tab.icon;
                   return (
                     <TabsTrigger key={tab.id} value={tab.id} className="flex gap-2 min-w-fit">
                       <Icon className="w-4 h-4" />
                       <span className="hidden sm:inline">{t.tabs[tab.id as keyof typeof t.tabs]}</span>
                     </TabsTrigger>
                   )
                })}
              </TabsList>
              
              <Card>
                <CardContent className="pt-6 min-h-[400px]">
                  {activeTab === 'details' && (
                    <div className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                        <FormInput label={t.labels.fullName} name="fullName" value={profile.fullName} onChange={handleInputChange} />
                        <FormInput label={t.labels.jobTitle} name="jobTitle" value={profile.jobTitle} onChange={handleInputChange} placeholder={t.placeholders.jobTitle} />
                      </div>
                      <FormInput label={t.labels.company} name="company" value={profile.company} onChange={handleInputChange} placeholder={t.placeholders.company} />
                      <div className="grid grid-cols-2 gap-4">
                        <FormInput 
                          label={t.labels.logoUrl} 
                          name="logoUrl" 
                          value={profile.logoUrl} 
                          onChange={handleInputChange} 
                          placeholder={t.placeholders.url} 
                          onUpload={(file) => handleImageUpload(file, 'logoUrl')}
                        />
                        <FormInput label={t.labels.logoLink} name="logoLink" value={profile.logoLink} onChange={handleInputChange} placeholder={t.placeholders.url} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <FormInput label={t.labels.email} name="email" value={profile.email} onChange={handleInputChange} type="email" placeholder={t.placeholders.email} />
                        <FormInput label={t.labels.website} name="website" value={profile.website} onChange={handleInputChange} placeholder={t.placeholders.url} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <FormInput label={t.labels.phone} name="phone" value={profile.phone} onChange={handleInputChange} placeholder={t.placeholders.phone} />
                        <FormInput label={t.labels.mobile} name="mobile" value={profile.mobile} onChange={handleInputChange} placeholder={t.placeholders.mobile} />
                      </div>
                      <FormInput label={t.labels.address} name="address" value={profile.address} onChange={handleInputChange} placeholder={t.placeholders.address} />
                      <FormInput 
                        label={t.labels.avatarUrl} 
                        name="avatarUrl" 
                        value={profile.avatarUrl} 
                        onChange={handleInputChange} 
                        placeholder={t.placeholders.url} 
                        onUpload={(file) => handleImageUpload(file, 'avatarUrl')}
                      />
                    </div>
                  )}

                  {activeTab === 'social' && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center mb-4">
                        <Label className="uppercase text-muted-foreground tracking-wider">{t.labels.socialProfiles}</Label>
                        <Button variant="outline" size="sm" onClick={addSocial}><Plus className="w-3 h-3 mr-1" /> {t.labels.addSocial}</Button>
                      </div>
                      {profile.socials.map((social, idx) => (
                        <div key={idx} className="flex items-center gap-2 border p-3 rounded-md">
                          <div className="flex-1 space-y-2">
                             <select
                                value={social.platform}
                                onChange={(e) => updateSocial(idx, 'platform', e.target.value)}
                                className="w-full text-sm bg-transparent border-b border-border py-1 text-foreground focus:outline-none"
                             >
                               {SOCIAL_PLATFORMS.map(p => (
                                 <option key={p} value={p} className="bg-background text-foreground">{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                               ))}
                             </select>
                             <Input
                                type="text"
                                value={social.url}
                                onChange={(e) => updateSocial(idx, 'url', e.target.value)}
                                placeholder={t.placeholders.url}
                                className="h-8 border-none px-0 focus-visible:ring-0 shadow-none"
                             />
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => removeSocial(idx)} className="text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'design' && (
                    <div className="space-y-6">
                      <div>
                        <Label className="uppercase text-muted-foreground tracking-wider mb-3 flex items-center gap-2"><Layout className="w-3 h-3" /> {t.labels.layout}</Label>
                        <div className="grid grid-cols-2 gap-3 mt-3">
                          {Object.values(TemplateType).map((type) => (
                            <Button
                              key={type}
                              variant={activeTemplate === type ? "default" : "outline"}
                              onClick={() => setActiveTemplate(type)}
                              className="w-full justify-start"
                            >
                              {type.replace('_', ' ')}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <Label className="uppercase text-muted-foreground tracking-wider mb-3 flex items-center gap-2"><Wand2 className="w-3 h-3" /> {t.labels.animation}</Label>
                        <div className="grid grid-cols-2 gap-3 mt-3">
                          {Object.values(AnimationType).map((anim) => {
                            const labelMap: Record<AnimationType, string> = {
                              [AnimationType.NONE]: t.animations.none,
                              [AnimationType.FADE_IN]: t.animations.fadeIn,
                              [AnimationType.SLIDE_UP]: t.animations.slideUp,
                              [AnimationType.PULSE]: t.animations.pulse,
                              [AnimationType.BOUNCE]: t.animations.bounce,
                              [AnimationType.FLIP]: t.animations.flip,
                              [AnimationType.SLICE_IN]: t.animations.sliceIn,
                              [AnimationType.FOLD_DOWN]: t.animations.foldDown,
                              [AnimationType.ZOOM_ROTATE]: t.animations.zoomRotate,
                              [AnimationType.SWING]: t.animations.swing,
                              [AnimationType.WOBBLE]: t.animations.wobble,
                              [AnimationType.BLUR_REVEAL]: t.animations.blurReveal,
                              [AnimationType.GLOW]: t.animations.glow,
                              [AnimationType.FLOAT]: t.animations.float,
                              [AnimationType.DIAGONAL_STRIPES]: t.animations.diagonalStripes,
                              [AnimationType.GLITCH]: t.animations.glitch
                            };
                            return (
                              <Button
                                key={anim}
                                variant={profile.style.animation === anim ? "default" : "outline"}
                                onClick={() => handleStyleChange('animation', anim)}
                                className="w-full justify-start"
                              >
                                {labelMap[anim]}
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>{t.labels.themeColor}</Label>
                          <div className="flex items-center gap-3">
                            <input type="color" value={profile.style.themeColor} onChange={(e) => handleStyleChange('themeColor', e.target.value)} className="w-10 h-10 cursor-pointer rounded border p-1 bg-background" />
                            <span className="text-xs font-mono">{profile.style.themeColor}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>{t.labels.textColor}</Label>
                          <div className="flex items-center gap-3">
                            <input type="color" value={profile.style.textColor || '#333333'} onChange={(e) => handleStyleChange('textColor', e.target.value)} className="w-10 h-10 cursor-pointer rounded border p-1 bg-background" />
                            <span className="text-xs font-mono">{profile.style.textColor || '#333333'}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-2">
                          <Label>{t.labels.cardBackgroundColor}</Label>
                          <div className="flex items-center gap-3">
                            <input type="color" value={profile.style.cardBackgroundColor || '#ffffff'} onChange={(e) => handleStyleChange('cardBackgroundColor', e.target.value)} className="w-10 h-10 cursor-pointer rounded border p-1 bg-background" />
                            <span className="text-xs font-mono">{profile.style.cardBackgroundColor || '#ffffff'}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>{t.labels.cardBorderRadius} ({profile.style.cardBorderRadius}px)</Label>
                          <input type="range" min="0" max="30" value={profile.style.cardBorderRadius || 0} onChange={(e) => handleStyleChange('cardBorderRadius', parseInt(e.target.value))} className="w-full" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                         <div className="space-y-2">
                          <Label>{t.labels.imageShape}</Label>
                          <select value={profile.style.imageShape} onChange={(e) => handleStyleChange('imageShape', e.target.value)} className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background">
                            <option value="circle">{t.shapes.circle}</option>
                            <option value="rounded">{t.shapes.rounded}</option>
                            <option value="square">{t.shapes.square}</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2"><TypeIcon className="w-3 h-3" /> {t.labels.typography}</Label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                           <select value={profile.style.fontFamily} onChange={(e) => handleStyleChange('fontFamily', e.target.value)} className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background">
                              {SUPPORTED_FONTS.map(f => <option key={f} value={f}>{f.split(',')[0]}</option>)}
                           </select>
                           <select value={profile.style.fontSize} onChange={(e) => handleStyleChange('fontSize', e.target.value)} className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background">
                              <option value="small">{t.sizes.small}</option>
                              <option value="medium">{t.sizes.medium}</option>
                              <option value="large">{t.sizes.large}</option>
                           </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'marketing' && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md border">{t.labels.marketingDescription}</p>
                      <FormInput label={t.labels.utmSource} name="utmSource" value={profile.marketing.utmSource} onChange={(e) => handleMarketingChange('utmSource', e.target.value)} placeholder={t.placeholders.utmSource} />
                      <FormInput label={t.labels.utmMedium} name="utmMedium" value={profile.marketing.utmMedium} onChange={(e) => handleMarketingChange('utmMedium', e.target.value)} placeholder={t.placeholders.utmMedium} />
                      <FormInput label={t.labels.utmCampaign} name="utmCampaign" value={profile.marketing.utmCampaign} onChange={(e) => handleMarketingChange('utmCampaign', e.target.value)} placeholder={t.placeholders.utmCampaign} />
                    </div>
                  )}

                  {activeTab === 'addons' && (
                    <div className="space-y-6">
                      <Card className="shadow-none border-dashed">
                        <CardHeader className="py-4">
                          <CardTitle className="text-sm flex items-center gap-2"><Briefcase className="w-4 h-4" /> {t.labels.ctaButton}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                             <div className="space-y-2">
                                <Label>{t.labels.ctaText}</Label>
                                <Input value={profile.addons.ctaText} onChange={(e) => handleAddonChange('ctaText', e.target.value)} placeholder={t.placeholders.cta} />
                             </div>
                             <div className="space-y-2">
                                <Label>{t.labels.ctaColor}</Label>
                                <div className="h-10 rounded-md overflow-hidden border">
                                  <input type="color" value={profile.addons.ctaColor} onChange={(e) => handleAddonChange('ctaColor', e.target.value)} className="w-[120%] h-[120%] -translate-x-2 -translate-y-2 cursor-pointer" />
                                </div>
                             </div>
                          </div>
                          <div className="space-y-2">
                             <Label>{t.labels.ctaUrl}</Label>
                             <Input value={profile.addons.ctaUrl} onChange={(e) => handleAddonChange('ctaUrl', e.target.value)} placeholder={t.placeholders.url} />
                          </div>
                        </CardContent>
                      </Card>

                      <div className="space-y-2">
                         <Label className="flex items-center gap-2"><ImageIcon className="w-4 h-4" /> {t.labels.bannerUrl}</Label>
                         <Input value={profile.addons.bannerUrl || ''} onChange={(e) => handleAddonChange('bannerUrl', e.target.value)} placeholder={t.placeholders.url} />
                      </div>

                      <div className="space-y-2">
                         <Label>{t.labels.legalDisclaimer}</Label>
                         <textarea value={profile.addons.disclaimer} onChange={(e) => handleAddonChange('disclaimer', e.target.value)} rows={4} className="w-full flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none" />
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border cursor-pointer" onClick={() => handleAddonChange('greenMessage', !profile.addons.greenMessage)}>
                         <div className={`w-5 h-5 rounded border flex items-center justify-center ${profile.addons.greenMessage ? 'bg-primary border-primary text-primary-foreground' : 'border-input bg-background'}`}>
                            {profile.addons.greenMessage && <Check className="w-3.5 h-3.5" />}
                         </div>
                         <Label className="cursor-pointer">{t.labels.ecoMessage}</Label>
                      </div>

                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border cursor-pointer" onClick={() => handleAddonChange('includeQr', !profile.addons.includeQr)}>
                         <div className={`w-5 h-5 rounded border flex items-center justify-center ${profile.addons.includeQr ? 'bg-primary border-primary text-primary-foreground' : 'border-input bg-background'}`}>
                            {profile.addons.includeQr && <Check className="w-3.5 h-3.5" />}
                         </div>
                         <Label className="cursor-pointer flex items-center gap-2"><QrCode className="w-4 h-4" /> {t.labels.includeQr}</Label>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Tabs>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-20">
            <Card>
               <div className="px-6 py-4 border-b flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPreviewDarkMode(!previewDarkMode)}>
                       <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${previewDarkMode ? 'bg-primary' : 'bg-muted-foreground/30'}`}>
                          <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${previewDarkMode ? 'translate-x-4' : 'translate-x-0'}`}></div>
                       </div>
                       <span className="text-xs font-medium text-muted-foreground uppercase">{t.labels.previewDarkMode}</span>
                    </div>
                    <Button variant="link" size="sm" onClick={() => setShowInstallModal(true)} className="text-xs uppercase"><HelpCircle className="w-3 h-3 mr-1" /> {t.labels.installGuide}</Button>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t.labels.livePreview}</span>
                 </div>
               </div>
               
               <div className="p-8 min-h-[300px] flex items-center justify-center bg-muted/30">
                  <div className={`rounded-xl shadow-lg border p-8 w-full max-w-2xl overflow-x-auto transition-colors ${previewDarkMode ? 'bg-zinc-950 text-white border-zinc-800' : 'bg-white text-black'}`}>
                     <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(generatedHtml) }} className="w-full" />
                  </div>
               </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="px-6 py-3 bg-muted border-b flex justify-between items-center gap-4">
                <span className="text-xs font-mono text-muted-foreground">{t.labels.htmlSource}: {t.labels.htmlFileName}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    {isShareCopied ? <Check className="w-3 h-3 mr-1" /> : <Share className="w-3 h-3 mr-1" />}
                    {isShareCopied ? t.labels.copied : t.labels.shareProfile}
                  </Button>
                  <Button size="sm" onClick={handleCopy}>
                    {isCopied ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                    {isCopied ? t.labels.copied : t.labels.copyHtml}
                  </Button>
                </div>
              </div>
              <div className="p-4 overflow-x-auto bg-zinc-950">
                <pre className="text-xs text-zinc-300 font-mono leading-relaxed whitespace-pre-wrap break-all max-h-64 overflow-y-auto">
                  {generatedHtml}
                </pre>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {showInstallModal && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowInstallModal(false)}></div>
            <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
               <CardHeader className="py-4 border-b flex flex-row justify-between items-center bg-muted/30">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <HelpCircle className="w-5 h-5" /> {t.labels.installGuide}
                  </CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setShowInstallModal(false)}><X className="w-5 h-5" /></Button>
               </CardHeader>
               <CardContent className="p-6 overflow-y-auto space-y-8">
                  <div>
                    <h4 className="font-bold flex items-center gap-2 mb-2"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="w-5 h-5" alt="Gmail" /> Gmail</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                      {t.installGuides.gmail.split('\n').map((step, i) => step.trim() && <li key={i}>{step.replace(/^\d+\.\s*/, '')}</li>)}
                    </ol>
                  </div>
                  <div className="border-t pt-6">
                    <h4 className="font-bold flex items-center gap-2 mb-2"><img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" className="w-5 h-5" alt="Outlook" /> Outlook</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                      {t.installGuides.outlook.split('\n').map((step, i) => step.trim() && <li key={i}>{step.replace(/^\d+\.\s*/, '')}</li>)}
                    </ol>
                  </div>
                  <div className="border-t pt-6">
                    <h4 className="font-bold flex items-center gap-2 mb-2"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Apple_Mail_Icon.png" className="w-5 h-5" alt="Apple Mail" /> Apple Mail</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                      {t.installGuides.apple.split('\n').map((step, i) => step.trim() && <li key={i}>{step.replace(/^\d+\.\s*/, '')}</li>)}
                    </ol>
                  </div>
               </CardContent>
            </Card>
         </div>
      )}

      {/* Privacy & Footer */}
      <div className="mt-auto py-8 text-center px-4">
        <div className="inline-block max-w-2xl mx-auto mb-6 p-4 rounded-2xl bg-muted/50 border">
           <p className="text-xs text-muted-foreground flex items-center justify-center gap-2 leading-relaxed">
             <Shield className="w-4 h-4 flex-shrink-0" />
             {t.privacyNotice}
           </p>
        </div>

        <footer className="text-xs text-muted-foreground pb-4">
          <p className="mb-1 flex items-center justify-center gap-2">
            <span>{t.footer.madeBy}</span>
          </p>
          <p className="opacity-70 text-[10px]">
            &copy; {new Date().getFullYear()} {t.labels.agencyName}. {t.footer.copyright}
          </p>
        </footer>
      </div>
    </div>
  );
}
