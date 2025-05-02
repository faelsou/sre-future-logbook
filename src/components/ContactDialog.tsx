
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

type ContactDialogProps = {
  children: React.ReactNode;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ children }) => {
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">{t('contato')}</DialogTitle>
        </DialogHeader>
        <div className="glass-effect p-4 rounded-xl mt-4">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">Nome</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-background/80 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-background/80 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-background/80 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
              ></textarea>
            </div>
            <Button className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-black">
              Enviar mensagem
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
