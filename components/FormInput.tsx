import React, { useRef } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Upload } from 'lucide-react';

interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  onUpload?: (file: File) => void;
  accept?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, value, onChange, placeholder, type = "text", onUpload, accept = "image/png, image/jpeg, image/webp, image/gif" }) => {
  const inputId = `input-${name}`;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpload) {
      onUpload(file);
    }
    // reset so the same file can be selected again if needed
    if (e.target) {
      e.target.value = '';
    }
  };

  return (
    <div className="grid w-full items-center gap-1.5 mb-4">
      <Label htmlFor={inputId}>{label}</Label>
      <div className="flex gap-2">
        <Input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1"
        />
        {onUpload && (
          <>
            <input 
              type="file" 
              accept={accept} 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileChange}
            />
            <Button 
              type="button" 
              variant="outline" 
              size="icon" 
              onClick={() => fileInputRef.current?.click()}
              title="Upload Image"
            >
              <Upload className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default FormInput;