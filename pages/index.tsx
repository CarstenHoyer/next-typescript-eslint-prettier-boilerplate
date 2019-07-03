import React from 'react';
import HomeHero from '../components/HomeHero';
import content from '../content/home.md';
import '../styles.scss';

export default class Home extends React.Component {
    render() {
        let {
            html,
            attributes: { title, cats },
        } = content;
        return (
            <article>
                <HomeHero />
                <h1 className="example">{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <ul>
                    {cats.map((cat, k) => (
                        <li key={k}>
                            <h2>{cat.name}</h2>
                            <p>{cat.description}</p>
                        </li>
                    ))}
                </ul>
            </article>
        );
    }
}
