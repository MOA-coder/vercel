import candidatura from "@/styles/services/estagios/resultados.module.css";
import Top from "@/components/top";
import Menu from "@/components/menu";
import Image from "next/image";
import PurpleButton from "@/components/buttons";
import { users } from "@/utils/image-exporter";
import Layout from "@/components/Layout";

export default function ResultadosEstagio() {
  return (
    <>
      <Layout title="Resultados estágios">
        <div className={candidatura.container}>
          <Top information="Resultados" pagina="/services/menu"></Top>
          <div className={candidatura.foto}>
            <Image src={users.user_default} width={130} height={130} alt="" />

            <h2>Ana Correia de Assis Diogo</h2>
          </div>
          <div className={candidatura.info}>
            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Número de estudante</p>
              <p className={`${candidatura.primary} ${candidatura.estnum}`}>
                20242190
              </p>
            </div>

            {/* <div className={candidatura.items}>
            <p className={candidatura.dark_g}>Nome</p>
            <p className={`${candidatura.primary} ${candidatura.name}`}>
              Ana Correia de Assis Diogo
            </p>
          </div> */}

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Curso</p>
              <p className={` ${candidatura.curso}`}>Engenharia informática</p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Média anual</p>
              <p className={`${candidatura.primary} ${candidatura.semestre}`}>
                15 valores
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Idade</p>
              <p className={`${candidatura.primary} ${candidatura.anolec}`}>
                22 anos
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Data da candidatura</p>
              <p className={`${candidatura.primary} ${candidatura.anoA}`}>
                17/09/24 às 10h:40:30
              </p>
            </div>

            <div className={candidatura.items}>
              <p className={candidatura.dark_g}>Estado</p>
              <p className={`${candidatura.danger} ${candidatura.turma}`}>
                Rejeitado
              </p>
            </div>
          </div>
          <div className={candidatura.button}>
            <PurpleButton
              description="Continuar"
              redirect="/services/menu"
            ></PurpleButton>
          </div>
          <Menu></Menu>
        </div>
      </Layout>
    </>
  );
}
