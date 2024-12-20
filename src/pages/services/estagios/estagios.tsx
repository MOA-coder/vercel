import estagios from "@/styles/services/estagios/estagios.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Estagios() {
  return (
    <Layout title="Estágios">
      <div className={estagios.container}>
        <Top information="Estágios" pagina="/services/menu"></Top>

        <div className={estagios.top}>
          <p>Estágios extra e curriculares</p>
          <h2>10 disponíveis</h2>
        </div>
        <div className={estagios.input}>
          <div className={estagios.inputContainer}>
            <div className={estagios.iconContainer}>
              <Image
                className={estagios.logo}
                src={"/icons/magn.svg"}
                alt="ba2ck"
                width={25}
                height={35}
                priority
              />
            </div>
            <input
              type="text"
              placeholder="Pesquisar por descrição"
              className={estagios.input3}
            />
          </div>
        </div>
        <div className={estagios.list}>
          <div className={estagios.top}>
            <p>Selecione uma opção</p>
            <p>Prazo</p>
          </div>
          <div className={estagios.credL}>
            <Link href="verOpcao" className={estagios.inner}>
              <Image src={"/icons/unitel.svg"} width={60} height={60} alt="" />
              <p className={estagios.in}>Unitel S.A - Dep. de Inovação</p>
              <p>10/10/24</p>
            </Link>
            <Link href="verOpcao" className={estagios.inner}>
              <Image src={"/icons/unitel.svg"} width={60} height={60} alt="" />
              <p className={estagios.in}>Unitel S.A - Dep. de Inovação</p>
              <p>10/10/24</p>
            </Link>
            <Link href="verOpcao" className={estagios.inner}>
              <Image src={"/icons/unitel.svg"} width={60} height={60} alt="" />
              <p className={estagios.in}>Unitel S.A - Dep. de Inovação</p>
              <p>10/10/24</p>
            </Link>
            <Link href="verOpcao" className={estagios.inner}>
              <Image src={"/icons/unitel.svg"} width={60} height={60} alt="" />
              <p className={estagios.in}>Unitel S.A - Dep. de Inovação</p>
              <p>10/10/24</p>
            </Link>
            <Link href="verOpcao" className={estagios.inner}>
              <Image src={"/icons/unitel.svg"} width={60} height={60} alt="" />
              <p className={estagios.in}>Unitel S.A - Dep. de Inovação</p>
              <p>10/10/24</p>
            </Link>
          </div>
        </div>

        <Menu></Menu>
      </div>
    </Layout>
  );
}
