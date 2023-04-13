import api from '../../services/api'
import { useState, useEffect } from 'react'

export default function Voos() {
    const [voos, setVoos] = useState([''])

    useEffect(() => {
        async function loadVoos() {
            const response = await api.get('https://airlabs.co/api/v9/flights', {
                params: {
                    api_key: 'de023a8b-b783-4364-a8d3-6c5d20d54223',

                }
            })

            setVoos(response.data.results)
        }
        loadVoos()
    }, [])

    return (
        <div>
            <h1>Os voos</h1>
            {voos.map((voo) => {
                return (
                    <article>
                        <strong>{voo.flight_number}</strong>
                    </article>
                )
            }
            )}
        </div>
    )



}