import FormSubmitButton from "@/components/FormSubmitButton"
import { prisma } from "@/lib/db/prisma"
import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'
import { authOptions } from "../api/auth/[...nextauth]/route"
export const metadata = {
    title: 'add product - shop'
}
async function addProduct(formData: FormData) {
    'use server'
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/add-product')
    }
    const name = formData.get('name')?.toString()
    const description = formData.get('description')?.toString()
    const imageUrl = formData.get('imageUrl')?.toString()
    const price = Number(formData.get('price') || 0)
    if (!name || !description || !imageUrl || !price) {
        throw Error('missing required fields')
    }
    // for (let i = 0; i < 50; i++) {
    //     await prisma.product.create({
    //         data: { name, description, imageUrl, price }
    //     })
    // }
    await prisma.product.create({
        data: { name, description, imageUrl, price }
    })
    redirect('/')
}
export default async function AddProductPage() {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/add-product')
    }
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">add product</h1>
            <form action={addProduct}>
                <input required name='name' placeholder="name" className="mb-3 w-full input input-bordered"></input>
                <textarea required name='description' placeholder="description"
                    className="textarea textarea-bordered mb-3 w-full"></textarea>
                <input required name='imageUrl' placeholder="image url" type="url" className="mb-3 w-full input input-bordered"></input>
                <input required name='price' placeholder="price" type='number' className="mb-3 w-full input input-bordered"></input>
                <FormSubmitButton className="btn-block">add product</FormSubmitButton>
            </form>
        </div>
    )
}


