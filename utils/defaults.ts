import { SignatureProfile, LangCode, AnimationType } from "../types";
import { translations } from "./translations";

const BASE_PROFILE: SignatureProfile = {
  fullName: '',
  jobTitle: '',
  company: '',
  logoUrl: '',
  logoLink: '',
  email: '',
  phone: '',
  mobile: '',
  website: '',
  address: '',
  avatarUrl: '',
  socials: [],
  style: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 'medium',
    imageShape: 'circle',
    themeColor: '#000000',
    textColor: '#333333',
    iconStyle: 'original',
    cardBackgroundColor: '#ffffff',
    cardBorderRadius: 0,
    animation: AnimationType.NONE
  },
  addons: {
    ctaText: '',
    ctaUrl: '',
    ctaColor: '#000000',
    bannerUrl: '',
    disclaimer: '',
    greenMessage: false,
    includeQr: false
  },
  marketing: {
    utmSource: '',
    utmMedium: '',
    utmCampaign: ''
  }
};

export const getProfileDefaults = (lang: LangCode): SignatureProfile => {
  return {
    ...BASE_PROFILE,
    style: { ...BASE_PROFILE.style },
    addons: { ...BASE_PROFILE.addons },
    marketing: { ...BASE_PROFILE.marketing }
  };
};
