import { Header } from "../header";
import { Link } from "../header/link";
import { Menu } from "../header/menu";
import { Limit } from "../limit";
import { Overlay } from "../overlay";
import { TitleSection } from "../title-section";
import { List } from "./articles/list";
import { Articles } from "./articles/section";
import { Title } from "./header/title";
import Image from "next/image";

import { allArticles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function Thoughts() {
  const sortedPosts = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const founders = sortedPosts.filter(post => post.tags.includes("founders"))
  const devs = sortedPosts.filter(post => post.tags.includes("devs"))

  return (
    <div>
      <Overlay>
        <Header>
          <Menu>
            <Link id="/#projects">Proyectos</Link>
            <Link id="/#about">Sobre mí</Link>
            <Link id="/articulos">Articulos</Link>
            <Link id="/#contact">Contacto</Link>
          </Menu>
        </Header>
        <Limit>
          <Title />
        </Limit>
      </Overlay>
      <Limit>
        <Articles>
          <TitleSection
            section=""
            text={
              <span>
                Algunas cosas
                <br /> para founders
              </span>
            }
          />
          <List>
            {founders.map((post) => (
              <a key={post._id} href={post.url} className="flex">
                <div className="flex flex-col">
                  <div className="font-bold text-xl">{post.title}</div>
                  <p className="italic py-2">{post.excerpt}</p>
                  <span className="self-end font-bold text-sm">{post.readTime} minutos de lectura</span>
                </div>
                {/*<div className="min-w-[150px] p-4">
                  <Image src={post.cover?.filePath.replace('../public', '')} width={300} height={200}/>
                </div>*/}
              </a>
            ))}
          </List>
        </Articles>
      </Limit>
      <Limit>
        <Articles>
          <TitleSection
            section=""
            text={
              <span>
                Algunas cosas
                <br /> para devs
              </span>
            }
          />
          <List>
            {devs.map((post) => (
              <a href={post.url}>
                <div key={post._id}>{post.title}</div>
              </a>
            ))}
          </List>
        </Articles>
      </Limit>
    </div>
  );
}
