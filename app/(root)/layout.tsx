import Header from "@/components/Header"
import MobileNav from "@/components/MobileNav"
import Sidebar from "@/components/Sidebar"
import { Toaster } from "@/components/ui/toaster"
import { getCurrentUser } from "@/lib/actions/user.action"
import { redirect } from "next/navigation"


const RootLayout = async ({ children }: { children : React.ReactNode }) => {
    const currentUser = await getCurrentUser()

    if(!currentUser) return redirect("/sign-in")

    return (
        <main className="flex h-screen">
            <Sidebar 
                {...currentUser}
            />

            <section className="flex h-full flex-1 flex-col">
                <MobileNav {...currentUser}/>
                <Header 
                    userId={currentUser.$id} 
                    accountId={currentUser.$id}
                />

                <div className="main-content">
                    {children}
                </div>
            </section>
            <Toaster />
        </main>
    )
}

export default RootLayout