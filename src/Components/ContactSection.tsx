import { Github, Instagram, Linkedin, Mail,MapPin,Phone, Send, Twitch } from "lucide-react"
import { cn } from "../lib/utils"


export const ContactSection = ()=>{
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out. 
                    I'm always open to discussing new opportunities.  
                </p>
                <div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4>Email</h4>
                                    <a href="mailto:kianasafavi4@gmail.com" className="text-muted-foreground hover:text-primary transition-colors ml-1">kianasafavi4@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4>Phone</h4>
                                    <a href="tel:+14372252082" className="text-muted-foreground hover:text-primary transition-colors">+1 (437) 225-2082</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4>Location</h4>
                                    <span className="text-muted-foreground">Kitchener, Ontario, Canada</span>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/kiana-safavi-baygi/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/kikisfb" target="_blank">
                                    <Github />
                                </a>
                                <a href="https://www.twitch.tv/geeky_kiki_" target="_blank">
                                    <Twitch />
                                </a>
                                <a href="https://www.instagram.com/kianasafavi/" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 