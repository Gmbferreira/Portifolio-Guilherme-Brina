import Navbar from "@/components/navbar";

export default function Home() {
    return<>
    <Navbar
        links={[
          { href: "/sobre-mim", title: "Sobre Mim" },
          { href: "/projetos", title: "Projetos" },
          { href: "/experiencias", title: "Experiências" },
          { href: "/contatos", title: "Contatos" },
        ]}
        className=""
      ></Navbar></>
}