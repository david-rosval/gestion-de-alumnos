"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string({ required_error: "El código es requerido" }).min(10, {
    message: "Código no válido",
  }),
  password: z.string({ required_error: "La contraseña es requerida" }).min(8, {
    message: "La contraseña debe ser mayor a 8 caracteres",
  }),
})

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: aquí va la función con server action para:
    // consultar base de datos
    // jwt
    // cookies
    console.log(values)
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[350px] p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-3xl font-semibold mb-5">Iniciar sesión</h1>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Código</FormLabel>
                  <FormControl>
                    <Input placeholder="ej. 20b1234567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="ej. untels123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full text-lg py-5 mt-5" type="submit">Ingresar</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}
