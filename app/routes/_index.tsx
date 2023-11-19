import type { LinksFunction } from "@remix-run/node";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export default function Index() {
  return (
    <main className="bg-black leading-6 text-white">
      <div className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat px-11 py-16 after:absolute after:bottom-0 after:-mx-11 after:block after:h-12 after:w-full after:bg-gradient-to-b after:from-transparent after:to-black after:sm:h-24">
        <div className="mx-auto max-w-xs px-1 text-center font-bold leading-5 md:max-w-4xl md:py-36">
          <div className="mb-10 text-6xl">Eure Hochzeit - Eure Party</div>
          <div className="-inset-1 -skew-y-3 bg-violet-700 p-2 text-4xl">
            Better Together - euer DJ in Berlin & Brandenburg
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="px-5 py-8 font-bold">
          <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-950 p-6">
            <h2 className="pb-6 text-4xl">Warum Better Together?</h2>
            <div className="">
              <p>
                Ihr wünscht euch eine einzigartige Hochzeit, die zu euch passt
                und einfach Spaß macht? Ihr wollt ein entspanntes House-Set zu
                eurer Gartenparty? Oder zu euren Lieblingsliedern bis in die
                frühen Morgenstunden abzappeln, quer durch die Hits der letzten
                Jahrzehnte? Oder außer Hip Hop nichts aus den Boxen kommen
                lassen? Dazu braucht ihr Leute, die nicht nur was von Musik
                verstehen, sondern auch feinfühlig auf eure Bedürfnisse
                eingehen. Wir geben Hand in Hand mit euch alles dafür, eure
                Hochzeit zu einem unvergesslichen Erlebnis zu machen - ganz
                genau so, wie ihr sie euch vorstellt. Wir achten auf eine
                passende Musikauswahl, die euch und eure Gäste die Tanzfläche
                stürmen lässt. Die richtige Musik zur richtigen Zeit. Zusammen
                kreieren wir eure legendäre Party!
              </p>
              <div className="pt-3 text-center">
                <a
                  href="/about-us"
                  className="mx-auto block h-10 w-fit rounded-md border-2 border-violet-700 bg-white px-2 leading-10 text-violet-700 sm:mx-0"
                >
                  Hier erfahrt ihr mehr über uns
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="px-5 font-bold lg:px-12 lg:pt-8">
            <div className="">
              <h2 className="pb-6 text-4xl">Was wir bieten</h2>
              <p className="">
                Mit uns als Hochzeits-DJ in und um Berlin kriegt ihr das volle
                Rundum-Sorglos-Paket: In einem Kennenlerngespräch stimmen wir
                mit euch den Stil eurer Party und eure musikalischen Vorlieben
                und No-Gos ab. Am Hochzeitstag kommen wir mit allem, was man für
                eine gelungene Party braucht: DJ-Equimpent, passender Audio- und
                Lichttechnik - und natürlich mit bester Laune 💃🕺
              </p>

              <div className="mt-16 hidden lg:block">
                <a
                  href="/contact"
                  className="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-4 py-2 text-lg text-violet-700"
                >
                  Überzeugt? Schreibt uns!
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto w-fit px-5 pt-8 text-center">
            <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-950 p-6">
              <h3 className="mb-3 font-bold">
                So kann's klingen: Jonathan mit einem Appetizer-Set.
              </h3>
              <iframe
                width="704"
                height="396"
                src="https://www.youtube.com/embed/GcH8hmAnyIE"
                title="YouTube video player"
                frameBorder="0"
                className="max-w-full rounded-md sm:max-w-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:hidden">
          <a
            href="/contact"
            className="mx-auto block w-fit rounded-md border-2 border-violet-700 bg-white px-2 py-2 text-2xl text-violet-700 lg:mx-12"
          >
            Überzeugt? Schreibt uns!
          </a>
        </div>
      </div>
    </main>
  );
}
