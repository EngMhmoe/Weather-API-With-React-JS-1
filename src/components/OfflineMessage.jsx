// ==========================================================
// Start Import Icons
// ==========================================================
import WifiOffIcon from "@mui/icons-material/WifiOff";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function OfflineMessage({ onReload }) {
  return (
    <main
      className="
                flex
                min-h-screen
                w-full
                items-center
                justify-center
                bg-[var(--bg-main)]
                px-4
                font-[IBM]
                text-[var(--text-primary)]
            "
      dir="rtl"
    >
      <section
        className="
                    relative
                    w-full
                    max-w-lg
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-[var(--border-color)]
                    bg-[var(--bg-card)]
                    p-8
                    text-center
                    shadow-2xl
                    shadow-[var(--shadow-color)]
                    sm:p-12
                "
      >
        {/* Start Decoration */}
        <div
          className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-red-500
                        opacity-10
                        blur-3xl
                    "
        ></div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Start Icon */}
        <div
          className="
                        relative
                        mx-auto
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        bg-red-500/10
                        text-red-400
                    "
        >
          <WifiOffIcon
            style={{
              fontSize: "45px",
            }}
          />
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Start Title */}
        <h1
          className="
                        mt-7
                        text-3xl
                        font-bold
                        text-[var(--text-primary)]
                        sm:text-4xl
                    "
        >
          أنت غير متصل بالإنترنت
        </h1>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Start Description */}
        <p
          className="
                        mt-4
                        text-sm
                        leading-7
                        text-[var(--text-secondary)]
                        sm:text-base
                    "
        >
          يرجى التحقق من اتصالك بالإنترنت ثم حاول تحميل التطبيق مرة أخرى.
        </p>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Start Reload Button */}
        <button
          onClick={onReload}
          className="
                        mt-8
                        inline-flex
                        cursor-pointer
                        items-center
                        gap-2
                        rounded-2xl
                        bg-[var(--accent-primary)]
                        px-7
                        py-4
                        font-bold
                        text-white
                        shadow-lg
                        transition
                        duration-300
                        hover:scale-105
                        hover:bg-[var(--accent-secondary)]
                        active:scale-95
                    "
        >
          <RefreshIcon
            style={{
              fontSize: "21px",
            }}
          />
          تحميل
        </button>
      </section>
    </main>
  );
}
