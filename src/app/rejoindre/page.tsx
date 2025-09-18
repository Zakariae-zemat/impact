"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  User,
  Mail,
  GraduationCap,
  Heart,
  CheckCircle,
  Camera,
  Mic,
  PenTool,
  Video,
  Users,
} from "lucide-react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"

type FormData = {
  prenom: string
  nom: string
  email: string
  telephone: string
  niveau: string
  filiere: string
  activites: string[]
  motivation: string
  experience: string
}

export default function RejoindreClub() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])

  const form = useForm<FormData>({
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      niveau: "",
      filiere: "",
      activites: [],
      motivation: "",
      experience: "",
    },
  })

  const activities = [
    { id: "photo", name: "Photographie", icon: Camera, color: "bg-orange-100 text-orange-700" },
    { id: "podcast", name: "Podcasts", icon: Mic, color: "bg-yellow-100 text-yellow-700" },
    { id: "journalisme", name: "Journalisme", icon: PenTool, color: "bg-blue-100 text-blue-700" },
    { id: "video", name: "Montage Vidéo", icon: Video, color: "bg-green-100 text-green-700" },
    { id: "oratoire", name: "Art Oratoire", icon: Users, color: "bg-purple-100 text-purple-700" },
  ]

  const toggleActivity = (activityId: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId) ? prev.filter((id) => id !== activityId) : [...prev, activityId],
    )
  }

  const onSubmit = (data: FormData) => {
    // Simulate form submission
    console.log({ ...data, activites: selectedActivities })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center border-primary/20">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Candidature Envoyée !</h2>
            <p className="text-muted-foreground mb-6 text-pretty">
              Merci pour votre intérêt ! Nous examinerons votre candidature et vous contacterons bientôt pour la suite
              du processus.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Retour à l'Accueil</Button>
              </Link>
              <p className="text-sm text-muted-foreground">Suivez-nous sur nos réseaux sociaux pour rester informé !</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-muted-foreground" />
              <div className="flex items-center gap-3">
              <div className="flex items-center">
              <img className="h-12 w-auto" src="logo-light.png" alt="Logo Impact" />
            </div>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">🚀 Rejoignez l'Aventure</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Candidature Club IMPACT</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Prêt à développer vos talents et rejoindre une communauté dynamique ? Remplissez ce formulaire pour
              commencer votre parcours avec nous !
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <User className="w-5 h-5 text-primary" />
                    Informations Personnelles
                  </CardTitle>
                  <CardDescription>
                    Partagez-nous vos informations pour que nous puissions vous connaître mieux.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="prenom"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Prénom *</FormLabel>
                              <FormControl>
                                <Input placeholder="Votre prénom" {...field} required />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="nom"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom *</FormLabel>
                              <FormControl>
                                <Input placeholder="Votre nom" {...field} required />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="votre.email@exemple.com" {...field} required />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="telephone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Téléphone</FormLabel>
                              <FormControl>
                                <Input placeholder="+212 6XX XXX XXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Academic Info */}
                      <Separator />
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          Informations Académiques
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="niveau"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Niveau d'Études *</FormLabel>
                                <FormControl>
                                  <select
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    {...field}
                                    required
                                  >
                                    <option value="">Sélectionnez votre niveau</option>
                                    <option value="L1">Licence 1</option>
                                    <option value="L2">Licence 2</option>
                                    <option value="L3">Licence 3</option>
                                    <option value="M1">Master 1</option>
                                    <option value="M2">Master 2</option>
                                    <option value="Doctorat">Doctorat</option>
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="filiere"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Filière *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ex: Informatique, Mathématiques..." {...field} required />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Activities Selection */}
                      <Separator />
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          <Heart className="w-5 h-5 text-primary" />
                          Activités d'Intérêt
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Sélectionnez les activités qui vous intéressent le plus (plusieurs choix possibles) :
                        </p>

                        <div className="grid md:grid-cols-2 gap-3">
                          {activities.map((activity) => {
                            const Icon = activity.icon
                            const isSelected = selectedActivities.includes(activity.id)
                            return (
                              <button
                                key={activity.id}
                                type="button"
                                onClick={() => toggleActivity(activity.id)}
                                className={`p-4 rounded-lg border-2 transition-all text-left ${
                                  isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${activity.color}`}
                                  >
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-foreground">{activity.name}</div>
                                    {isSelected && (
                                      <div className="text-xs text-primary font-medium">✓ Sélectionné</div>
                                    )}
                                  </div>
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Motivation */}
                      <Separator />
                      <FormField
                        control={form.control}
                        name="motivation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Motivation *</FormLabel>
                            <FormDescription>
                              Expliquez-nous pourquoi vous souhaitez rejoindre le Club IMPACT (minimum 50 mots)
                            </FormDescription>
                            <FormControl>
                              <Textarea
                                placeholder="Partagez votre motivation, vos objectifs et ce que vous espérez apporter au club..."
                                className="min-h-32"
                                {...field}
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expérience Pertinente</FormLabel>
                            <FormDescription>
                              Décrivez toute expérience pertinente (projets, stages, activités associatives...)
                            </FormDescription>
                            <FormControl>
                              <Textarea
                                placeholder="Partagez vos expériences en lien avec nos activités..."
                                className="min-h-24"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                        Envoyer ma Candidature
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-foreground">Pourquoi Nous Rejoindre ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Développement Personnel</h4>
                      <p className="text-sm text-muted-foreground">
                        Perfectionnez vos compétences créatives et communicationnelles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Réseau Professionnel</h4>
                      <p className="text-sm text-muted-foreground">
                        Créez des liens durables avec des professionnels et étudiants
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Expérience Pratique</h4>
                      <p className="text-sm text-muted-foreground">
                        Participez à des projets concrets et enrichissants
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 bg-gradient-to-br from-accent/10 to-primary/5">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">Questions ?</h4>
                    <p className="text-sm text-muted-foreground">
                      N'hésitez pas à nous contacter pour plus d'informations
                    </p>
                    <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5 bg-transparent">
                      Nous Contacter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
