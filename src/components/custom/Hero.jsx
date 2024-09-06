import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#9d4edd]">
          Descubra Sua Próxima Aventura com IA:{" "}
        </span>
        <br />
        Itinerários Personalizados ao Seu Alcance
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Seu planejador de viagens pessoal e curador de viagens, criando
        itinerários personalizados de acordo com seus interesses e orçamento
      </p>
      <Button className="bg-[#9d4edd]">Comece Agora, É Grátis</Button>
    </div>
  );
}

export default Hero;
