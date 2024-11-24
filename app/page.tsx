export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>Our website is currently undergoing maintenance.</div>
        <div>But you don&apos;t have to wait to avail our services!</div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            href="https://wa.me/9997035168?text=Hi%20there,%20I%20would%20like%20to%20avail%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-500 text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Chat on WhatsApp
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:yusuf@weekendlabs.in?subject=Inquiry&body=Hi%20Yusuf,%0A%0AI%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Us
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Weekend Labs</p>
      </footer>
    </div>
  );
}
