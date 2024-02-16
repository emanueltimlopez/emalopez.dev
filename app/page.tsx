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
import { List } from "./projects/list";
import { Project } from "./projects/project";
import { Projects } from "./projects";
import { Footer } from "./footer";

export default function Home() {
  return (
    <main>
      <Overlay>
        <Header>
          <Menu>
            <Link id="projects">Projects</Link>
            <Link id="about">About</Link>
            <Link id="contact">Contact</Link>
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
        <Projects>
          <TitleSection section="Projects" text={<span>Some things<br/> {"I've"} worked on</span>}/>
          <List>
            { projects.map((p) => <Project key={p.title} {...p} />) }
          </List>
        </Projects>
      </Limit>
      
      <Overlay>
        <Limit>
          <About>
            <TitleSection section="About" text={<span>I love what<br/> {"I'm"} doing</span>} />
            <Text>
            <p>I have been in the software development world for 15 years. I began as a freelance, then joined an agency, working on various projects, including game  development. Later on, I transitioned to a large company where I gained experience in scalability, quality, and leadership teams.</p>
            <p>Now I work in technical consulting, creating apps, and helping to improve product discovery and delivery for startups.</p>
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
          <TitleSection section="Contact" text={<span>Lets work<br/> together</span>} />
          <Text>
            <p>Contact me and let me know what you want to build. {"I'll"} be happy to contribute.</p>
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
