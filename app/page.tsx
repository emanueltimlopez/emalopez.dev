import Image from "next/image";
import { Header } from "./header";
import { Menu } from "./header/menu";
import { Hero } from "./hero";
import { Title } from "./hero/title";
import { projects } from "./projects-data";
import { TitleSection } from "./title-section";
import { About } from "./about";
import { Contact } from "./contact";
import { Text } from "./text";
import { Overlay } from "./overlay";
import { Link } from "./header/link";
import { Picture } from "./hero/picture";
import { CTA } from "./hero/cta";
import { Limit } from "./limit";
import { Links } from "./about/links";
import { LinkExternal } from "./about/link-external";
import { Email } from "./contact/email";
import { CTAMobile } from "./hero/cta-mobile";
import { List as ProjectList } from "./projects/list";
import { Project } from "./projects/project";
import { Projects } from "./projects";
import { Footer } from "./footer";
import { allArticles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { Blog } from "./blog";
import { List as BlogList } from "./blog/list";
import { Post as BlogPost } from "./blog/post";

export default function Home() {
  const sortedPosts = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <main>
      <Overlay>
        <Header>
          <Menu>
            <Link id="/#projects">Proyectos</Link>
            <Link id="/#about">Sobre mí</Link>
            <Link id="/articulos">Articulos</Link>
            <Link id="/#contact">Contacto</Link>
          </Menu>
        </Header>
        <Hero>
          <Limit>
            <Picture/>
            <Title />
            <CTA />
            <CTAMobile />
          </Limit>
        </Hero>
      </Overlay>

      <Limit>
        <div className="md:grid md:grid-cols-2">
          <Projects>
            <TitleSection section="Proyectos" text={<span>Algunas cosas<br/> en las que estoy<br/> trabajando</span>}/>
            <ProjectList>
              { projects.map((p) => <Project key={p.title} {...p} />) }
            </ProjectList>
          </Projects>

          <Blog>
             <TitleSection section="Blog" text={<span>Mis últimos<br/> artículos</span>}/>
             <BlogList>
               { sortedPosts.slice(0, 3).map((post) => <BlogPost key={post._id} {...post} />) }
             </BlogList>
          </Blog>
        </div>
      </Limit>
      
      <Overlay>
        <Limit>
          <About>
            <TitleSection section="Sobre mí" text={<span>Me encanta<br/> lo que hago</span>} />
            <Text>
            <p>Estoy en el mundo del desarrollo de software hace 15 años. Comencé como freelancer, luego me uní a una agencia, 
                trabajando en varios proyectos, incluyendo el desarrollo de juegos. Más tarde, seguí mi carrera en una empresa grande
                donde adquirí experiencia en escalabilidad, calidad y equipos de liderazgo.</p>
            <p>Ahora me dedico a la consultoría técnica, ayudando a founders y equipos en startups a desarrollar sus productos y procesos.</p>
            <Links>
              <LinkExternal url="https://www.linkedin.com/in/emanuelplopez/">Linkedin</LinkExternal>
              <LinkExternal url="https://github.com/emanueltimlopez">Github</LinkExternal>
            </Links>              
          </Text>
         </About>
        </Limit>
      </Overlay>
      
      <Limit>
        <Contact>
          <TitleSection section="Contacto" text={<span>Trabajemos<br/> juntos</span>} />
          <Text>
            <p>Contame que queres construir y veamos en que te puedo ayudar.</p>
            <Email>
              pabloemanuellopez@gmail.com
            </Email>
          </Text>
        </Contact>
      </Limit>

      <Footer />
    </main>
  );
}
