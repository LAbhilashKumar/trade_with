// import { Link } from "@tanstack/react-router";
// import { Logo } from "./Header";
// import { Twitter, Instagram, Youtube, Mail } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="border-t border-border bg-surface mt-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//           <div className="md:col-span-2">
//             <Logo />
//             <p className="mt-4 text-sm text-muted-foreground max-w-sm">
//               Structured, mentor-backed forex education for traders who want
//               a repeatable edge — not another get-rich-quick promise.
//             </p>
//             <div className="mt-6 flex items-center gap-4 text-muted-foreground">
//               <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="size-4" /></a>
//               <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="size-4" /></a>
//               <a href="#" aria-label="YouTube" className="hover:text-foreground"><Youtube className="size-4" /></a>
//               <a href="mailto:hello@twsforex.com" aria-label="Email" className="hover:text-foreground"><Mail className="size-4" /></a>
//             </div>
//           </div>
//           <div>
//             <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Explore</div>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/courses" className="text-foreground/80 hover:text-foreground">Courses</Link></li>
//               <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
//               <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link></li>
//             </ul>
//           </div>
//           <div>
//             <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contact</div>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>hello@twsforex.com</li>
//               <li>Bengaluru, India</li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed">
//             <span className="text-foreground/80 font-medium">Risk disclaimer:</span>{" "}
//             Trading foreign exchange involves substantial risk and is not
//             suitable for every investor. Past performance is not indicative of
//             future results. Content on this site is for educational purposes only.
//           </p>
//           <p className="text-xs text-muted-foreground font-mono">© {new Date().getFullYear()} TWS Forex Trading</p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Link } from "@tanstack/react-router";
import { Logo } from "./Header";
import { Send, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Structured, mentor-backed forex education for traders who want
              a repeatable edge — not another get-rich-quick promise.
            </p>
            <div className="mt-6 flex items-center gap-4 text-muted-foreground">
              <a href="https://www.instagram.com/tradewith_sudharshan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground"><Instagram className="size-4" /></a>
              <a href="https://www.youtube.com/@tradersudharshan" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-foreground"><Youtube className="size-4" /></a>
              <a href="https://t.me/swe6300" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-foreground"><Send className="size-4" /></a>
              <a href="mailto:hello@twsforex.com" aria-label="Email" className="hover:text-foreground"><Mail className="size-4" /></a>
            </div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="text-foreground/80 hover:text-foreground">Courses</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link></li>
              <li><a href="https://t.me/swe6300" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">Telegram</a></li>
              <li><a href="https://www.youtube.com/@tradersudharshan" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground">YouTube</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@twsforex.com</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed">
            <span className="text-foreground/80 font-medium">Risk disclaimer:</span>{" "}
            Trading foreign exchange involves substantial risk and is not
            suitable for every investor. Past performance is not indicative of
            future results. Content on this site is for educational purposes only.
          </p>
          <p className="text-xs text-muted-foreground font-mono">© {new Date().getFullYear()} TWS Forex Trading</p>
        </div>
      </div>
    </footer>
  );
}
