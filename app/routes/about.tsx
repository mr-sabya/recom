import React from 'react'
import Header from '~/components/common/Header'
import { Welcome } from '~/welcome/welcome'
import type { Route } from '../+types/root';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About - New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function About() {
    return (
        <div>
            <Welcome />
        </div>
    )
}
