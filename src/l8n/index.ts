import ru from './ru';
import en from './en';

export function l8n(key: keyof typeof ru | keyof typeof en): string {
  return ru[key] || '';
}