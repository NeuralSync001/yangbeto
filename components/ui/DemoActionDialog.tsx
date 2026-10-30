"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Check, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDialog } from "@/hooks/useDialog";

interface Props {
  open: boolean;
  onClose: () => void;
  message: string;
}

export function DemoActionDialog({ open, onClose, message }: Props) {
  const [completed, setCompleted] = useState(false);
  const ref = useDialog<HTMLDivElement>(open, onClose);

  if (!open) return null;

  const close = () => {
    setCompleted(false);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[90] grid place-items-center p-4">
      <button className="absolute inset-0 bg-cacau/60" onClick={close} aria-label="Fechar prévia" />
      <section
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-action-title"
        className="relative w-full max-w-lg bg-paper p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">Demonstração interativa</p>
            <h2 id="demo-action-title" className="text-3xl">
              {completed ? "Simulação concluída" : "Prévia da mensagem"}
            </h2>
          </div>
          <button onClick={close} aria-label="Fechar" className="grid size-10 shrink-0 place-items-center hover:bg-mist">
            <X className="size-5" />
          </button>
        </div>

        {completed ? (
          <div role="status" className="mt-6 border border-line bg-mist p-5">
            <p className="flex items-center gap-2 font-medium text-cacau">
              <Check className="size-5 text-brand" /> Tudo certo na demonstração.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-grafite/75">
              Nenhuma mensagem foi enviada e nenhum pedido ou contato real foi criado.
            </p>
          </div>
        ) : (
          <>
            <p className="mt-4 text-sm leading-relaxed text-grafite/70">
              Este é um projeto conceitual. O texto abaixo é apenas uma prévia local; não será enviado para ninguém.
            </p>
            <div className="mt-5 whitespace-pre-wrap border border-line bg-mist p-4 text-sm leading-relaxed text-grafite">
              {message}
            </div>
            <Button onClick={() => setCompleted(true)} className="mt-6 w-full">
              <MessageCircle className="size-4" /> Simular envio
            </Button>
          </>
        )}
        {completed && (
          <Button variant="outline" onClick={close} className="mt-6 w-full">
            Fechar
          </Button>
        )}
      </section>
    </div>,
    document.body,
  );
}

interface ActionButtonProps {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost" | "light";
}

export function DemoActionButton({ message, children, className, variant }: ActionButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} className={className} variant={variant}>
        {children}
      </Button>
      <DemoActionDialog open={open} onClose={() => setOpen(false)} message={message} />
    </>
  );
}
