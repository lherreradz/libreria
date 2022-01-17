import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Libro() {
    const router = useRouter();
    const {libro, categoria} = router.query;

    return (
        <div>
            <Head>
                <title>{libro}</title>
            </Head>

            <h1>Libro: {libro}</h1>
            <h1>Categoria: {categoria}</h1>
        </div>
    )
}
