export default function Index() {
  return (
    <div>
      <p>
        Wir freuen uns, von euch und euren Plänen zu hören. Ihr könnt gerne das
        Formular unten verwenden, um uns zu fragen, welche Musik wir im Angebot
        haben, wie der Hochzeitstag genau aussehen soll oder eine andere Frage
        stellen. Nachdem ihr uns angeschrieben habt, melden wir uns bei euch für
        ein kostenloses Kennenlerngespräch.
      </p>
      <div className="mb4">
        <h4 className="f3 b lh-title mb3 tc">Schreibt uns</h4>

        <form action="" data-netlify="true">
          <div className="flex-l mhn1-l">
            <div className="ph1-l w-50-l">
              <fieldset>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-100 mb2"
                />
                <label htmlFor="name">Name</label>
              </fieldset>
            </div>
            <div className="ph1-l w-50-l">
              <fieldset>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-100 mb2"
                />
                <label htmlFor="email">E-Mail-Adresse</label>
              </fieldset>
            </div>
          </div>

          <fieldset>
            <textarea
              id="message"
              name="message"
              placeholder="Eure Nachricht"
              rows={8}
              cols={80}
              className="w-100"
            ></textarea>
            <label htmlFor="message">Eure Nachricht</label>
          </fieldset>
          <div className="tc">
            <button type="submit" className="btn w-100 w-auto-ns raise">
              Abschicken
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
