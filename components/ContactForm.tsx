export function ContactForm() {
  return (
    <form className="paper-panel grid gap-5 rounded-sm p-6 shadow-soft" action="#" method="post">
      <div>
        <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="nome">
          Nome e cognome
        </label>
        <input
          className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
          id="nome"
          name="nome"
          required
          type="text"
        />
      </div>
      <div>
        <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="azienda">
          Nome del negozio / attività
        </label>
        <input
          className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
          id="azienda"
          name="azienda"
          required
          type="text"
        />
      </div>
      <div>
        <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="email">
          Email
        </label>
        <input
          className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
          id="email"
          name="email"
          required
          type="email"
        />
      </div>
      <div>
        <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="telefono">
          Telefono
        </label>
        <input
          className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
          id="telefono"
          name="telefono"
          type="tel"
        />
      </div>
      <div>
        <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="citta">
          Città
        </label>
        <input
          className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
          id="citta"
          name="citta"
          type="text"
        />
      </div>
      <div>
        <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="messaggio">
          Messaggio
        </label>
        <textarea
          className="focus-ring mt-2 min-h-36 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
          id="messaggio"
          name="messaggio"
          required
        />
      </div>
      <button
        className="focus-ring min-h-12 rounded-sm border border-ceramica bg-ceramica px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#004f31]"
        type="submit"
      >
        Invia richiesta
      </button>
      <p className="text-sm leading-6 text-argilla">
        Le richieste sono rivolte a negozi, botteghe e punti vendita. Non effettuiamo vendita online
        o vendita diretta al pubblico dalla sede produttiva.
      </p>
      <p className="text-sm leading-6 text-argilla">
        Il modulo è predisposto per il collegamento a un servizio di invio email o CRM. Verificare la
        configurazione prima della pubblicazione.
      </p>
    </form>
  );
}
