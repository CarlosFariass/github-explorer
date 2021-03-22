import { RepositoryIntem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/CarlosFariass/repos')
                .then(response => response.json())
                .then(data => setRepositories(data))
    }, []);
    console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Lista de repsitórios</h1>
            
            <ul>
                {repositories.map(repository => {
                return  <RepositoryIntem key={repository.name} repository={repository} />
            })}
            </ul>
        </section>
    )
}