import Link from 'next/link';

export default function SitemapPohonDosenPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans flex flex-col items-center">
      <div className="w-full max-w-6xl">
        
        {/* JUDUL UTAMA */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            Sitemap Aplikasi Manajemen Produk Kelompok
          </h1>
          <p className="text-slate-500 text-sm mt-1">Struktur Navigasi Halaman Web Bertingkat</p>
        </div>

        {/* LEVEL 1: HOMEPAGE (Paling Atas) */}
        <div className="flex justify-center mb-10">
          <div className="bg-emerald-600 text-white px-10 py-3 rounded-lg text-sm font-bold shadow-md border border-emerald-700">
            Beranda
          </div>
        </div>

        {/* LEVEL 2 & 3: STRUKTUR TANGGA MENYAMPING */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          
          {/* KOLOM 1: KATEGORI PRODUK */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div className="bg-amber-500 text-white text-center py-2 px-3 rounded-lg text-xs font-bold mb-4 shadow-sm">
              Kategori Produk
            </div>
            {/* Efek Garis Cabang Tangga */}
            <div className="pl-2 border-l-2 border-amber-300 space-y-3">
              {/* TOMBOL MAKANAN YANG SEKARANG BISA DIKLIK */}
              <Link href="/makanan" className="block p-2 bg-amber-50 hover:bg-amber-100 rounded border border-amber-400 text-xs text-amber-800 font-bold shadow-xs transition">
                └─ Makanan & Minuman (Klik)
              </Link>
              {/* TOMBOL KOSMETIK */}
              <Link href="/kosmetik" className="block p-2 bg-amber-50 hover:bg-amber-100 rounded border border-amber-400 text-xs text-amber-800 font-bold shadow-xs transition">
                └─ Kosmetik (Bisa Diklik)
              </Link>
              <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-400 font-medium">
                └─ Obat-Obatan
              </div>
            </div>
          </div>

          {/* KOLOM 2: LAYANAN UTAMA */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div className="bg-orange-500 text-white text-center py-2 px-3 rounded-lg text-xs font-bold mb-4 shadow-sm">
              Layanan Utama
            </div>
            <div className="pl-2 border-l-2 border-orange-300 space-y-3">
              {/* Tingkat 1 */}
              <div className="p-2 bg-slate-100 rounded border border-slate-200 text-xs text-slate-700 font-bold">
                └─ By Team
              </div>
              {/* Tingkat 2 Menjorok Lebih ke Dalam */}
              <div className="pl-4 border-l-2 border-slate-300 space-y-2">
                <div className="p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-400">
                  └─ Product Management
                </div>
                <div className="p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-400">
                  └─ Cek Stok Real-Time
                </div>
                <div className="p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-400">
                  └─ Sistem Antrian
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM 3: PROMO & SOSIAL */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div className="bg-rose-500 text-white text-center py-2 px-3 rounded-lg text-xs font-bold mb-4 shadow-sm">
              Promo & Sosial
            </div>
            <div className="pl-2 border-l-2 border-rose-300 space-y-3">
              <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-400 font-medium">
                └─ Diskon Toko
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-400 font-medium">
                └─ Sistem Donasi
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-400 font-medium">
                └─ Support Team
              </div>
            </div>
          </div>

          {/* KOLOM 4: AKUN & INFORMASI */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div className="bg-sky-500 text-white text-center py-2 px-3 rounded-lg text-xs font-bold mb-4 shadow-sm">
              Akun & Informasi
            </div>
            <div className="pl-2 border-l-2 border-sky-300 space-y-3">
              <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-400 font-medium">
                └─ User Impact Score
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-400 font-medium">
                └─ Expired Alert
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-400 font-medium">
                └─ Halaman Login
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}