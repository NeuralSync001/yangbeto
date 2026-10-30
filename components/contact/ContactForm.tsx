"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DemoActionDialog } from "@/components/ui/DemoActionDialog";

const subjects = ["Dúvida sobre o catálogo", "Sugestão de projeto", "Outro assunto"];

const field = "min-h-11 w-full border border-line bg-paper px-4 text-sm outline-none focus:border-cacau";

export function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [preview, setPreview] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Preencha seu nome e a mensagem para continuar.");
      return;
    }
    setError("");
    setPreview(`Demonstração de contato NÓRIA\nNome: ${name.trim()}\nAssunto: ${subject}\n\n${message.trim()}`);
    setDialogOpen(true);
  };

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div>
        <label htmlFor="cf-name" className="eyebrow mb-2 block">Seu nome</label>
        <input id="cf-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" className={field} aria-describedby={error ? "cf-error" : undefined} />
      </div>
      <div>
        <label htmlFor="cf-subject" className="eyebrow mb-2 block">Assunto</label>
        <select id="cf-subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={field}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message" className="eyebrow mb-2 block">Mensagem</label>
        <textarea id="cf-message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={`${field} py-3`} />
      </div>
      {error && (
        <p id="cf-error" role="alert" className="text-sm text-[#8a2f25]">
          {error}
        </p>
      )}
      <Button type="submit" className="w-full sm:w-auto">
        <MessageCircle className="size-4" /> Pré-visualizar mensagem
      </Button>
      <p className="text-xs leading-relaxed text-grafite/60">
        Projeto de demonstração: use dados fictícios. Nada é enviado ou armazenado; o texto fica apenas nesta página.
      </p>
      <DemoActionDialog open={dialogOpen} onClose={() => setDialogOpen(false)} message={preview} />
    </form>
  );
}
