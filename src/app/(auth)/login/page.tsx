import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center p-4">
      <Link href="/" className="mb-4">
            <div className="absolute top-6 left-6 flex items-center gap-2 text-xl font-semibold">
              <span className="text-indigo-600 text-2xl">🤖</span>
              <span className="text-gray-100 font-extrabold">CodeChef</span>
            </div>
      </Link>
      <Card className="w-full max-w-md shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white">CodeChef</h1>
            <p className="text-sm text-slate-300">Bharati Vidhyapeeths College of Engineering</p>
          </div>

          <form className="space-y-5">
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
                placeholder="Enter your password"
                className="mt-1 bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl shadow">
              Login
            </Button>
          </form>

          <p className="text-sm text-slate-400 mt-6 text-center">
            Don&#39;t have an account? <Link href="/register" className="text-indigo-400 hover:underline">Register</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
