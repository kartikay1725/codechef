import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center p-4">
    <Link href="/" className="mb-4">
      <div className="absolute top-6 left-6 flex items-center gap-2 text-xl font-semibold">
              <Image width={40} height={40} src="/logo.webp" alt="CodeChef Logo" className="w-10 h-10" />
              
              <span className="text-gray-100 font-extrabold">CodeChef</span>
            </div>
            </Link>
      <Card className="w-full max-w-md shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white">CodeChef</h1>
            <p className="text-sm text-slate-300">Bharati vidhyapeeth college of engineering , New Delhi</p>
          </div>

          <form className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="mt-1 bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your college email"
                className="mt-1 bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                className="mt-1 bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl shadow">
              Register
            </Button>
          </form>

          <p className="text-sm text-slate-400 mt-6 text-center">
            Already have an account? <Link href="/login" className="text-indigo-400 hover:underline">Login here</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}