"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { AlertCircle, BookOpen, HelpCircle, Lightbulb, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <NavbarStyleFullscreen
          navItems={[
            { name: "O Problema", id: "problem" },
            { name: "A Solução", id: "solution" },
            { name: "Benefícios", id: "benefits" },
            { name: "A Oferta", id: "offer" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="Playbook de Vendas"
          bottomLeftText="Jhonatan Sousa"
          bottomRightText="expert@playbook.com"
        />
      </div>

      <div id="hero" data-section="hero" style={{ paddingTop: "80px", paddingBottom: "var(--padding-hero-page-padding)" }}>
        <HeroSplit
          title="Descubra o Método Exato para Transformar sua Fábrica de Sorvetes em uma Máquina de Vendas Altamente Lucrativa"
          description="Pare de depender do boca a boca ou de vendedores que apenas tiram pedidos. Aprenda a estruturar um processo comercial em duas camadas que multiplica seus Pontos de Venda (PDVs) e esmaga a concorrência — sem precisar baixar o seu preço."
          tag="Guia da Indústria"
          tagIcon={BookOpen}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          buttons={[
            { text: "👉 QUERO ACESSAR O PLAYBOOK AGORA", href: "#offer" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B50916hkBOTNNMd7JFWEWueGh5/uploaded-1773769233457-3o30a1fy.png"
          imageAlt="Playbook de Vendas para Fábrica de Sorvetes - Guia Completo"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
          ariaLabel="Hero section - Ice cream factory sales playbook"
        />
      </div>

      <div id="problem" data-section="problem" style={{ paddingBottom: "var(--padding-hero-page-padding)" }}>
        <TextAbout
          tag="O Desafio"
          tagIcon={AlertCircle}
          tagAnimation="slide-up"
          title="Você está deixando dinheiro na mesa todos os dias. E os dados provam isso."
          useInvertedBackground={false}
          ariaLabel="Problem section - Market opportunity"
        />
      </div>

      <div id="solution" data-section="solution" style={{ paddingBottom: "var(--padding-hero-page-padding)" }}>
        <FeatureCardSeven
          title="Apresentamos o Playbook Interno de Estruturação Comercial B2B"
          description="O Guia Definitivo do Método Jhonatan Sousa para Indústrias de Sorvetes e Picolés. Este não é mais um e-book teórico. É um manual tático de 'engenharia reversa' de vendas que transforma sua operação comercial."
          tag="A Solução"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "A Ilusão do Vendedor Faz-Tudo",              description: "Descobrir por que contratar um vendedor genérico nunca funciona e como estruturar dois papéis distintos que se complementam",              imageSrc: "http://img.b2bpic.net/free-photo/work-team-office-engaged-infographics-analysis-problem-solving_482257-123647.jpg",              imageAlt: "Estrutura de vendas em duas camadas"
            },
            {
              id: 2,
              title: "Guerra de Preços",              description: "Entender como seus competidores estão jogando e como você nunca mais precisará competir por preço",              imageSrc: "http://img.b2bpic.net/free-photo/goals-target-aspiration-perforated-paper-graph_53876-41397.jpg",              imageAlt: "Análise de métricas e preços"
            },
            {
              id: 3,
              title: "Ausência de Processo",              description: "Implementar o sistema comprovado que elimina a dependência do dono e cria vendas previsíveis",              imageSrc: "http://img.b2bpic.net/free-photo/water-melon-slices-bar-restaurant_1232-3426.jpg",              imageAlt: "Processo padronizado de vendas"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          ariaLabel="Solution section - The playbook method"
        />
      </div>

      <div id="benefits" data-section="benefits" style={{ paddingBottom: "var(--padding-hero-page-padding)" }}>
        <MetricCardSeven
          title="6 Pilares do Playbook"
          description="Domina cada aspecto essencial da venda B2B para fábricas de sorvetes"
          tag="Benefícios"
          tagIcon={Star}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "Mapeamento",              title: "Cliente Ideal (ICP)",              items: ["Perfil exato do comprador", "Segmentação por região", "Análise de potencial de PDV"]
            },
            {
              id: "2",              value: "Estrutura",              title: "A Escada de Valor B2B",              items: ["Funil de 4 estágios", "Gatilhos de conversão", "Métricas por etapa"]
            },
            {
              id: "3",              value: "Máquina",              title: "Duas Camadas (SDRs e Closers)",              items: ["Prospecção sistemática", "Qualificação de leads", "Fechamento consultivo"]
            },
            {
              id: "4",              value: "Scripts",              title: "Matadores (Copie e Cole)",              items: ["15+ scripts testados", "Mensagens por canal", "Ajustes para objeções"]
            },
            {
              id: "5",              value: "Armas",              title: "Técnicas de Fechamento",              items: ["Método da escassez", "Urgência autêntica", "Garantias que vendem"]
            },
            {
              id: "6",              value: "Métricas",              title: "KPIs de Ouro",              items: ["Dashboard de rastreamento", "Previsão de receita", "ROI por campanha"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "👉 QUERO COPIAR ESSES SCRIPTS PARA MINHA FÁBRICA", href: "#offer" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Benefits section - 6 pillars of the playbook"
        />
      </div>

      <div id="author" data-section="author" style={{ paddingBottom: "var(--padding-hero-page-padding)" }}>
        <TeamCardEleven
          title="Sobre Jhonatan Sousa"
          description="Especialista em Estruturação Comercial e funis de Vendas avançados. Não acredita em intuição, acredita em dados, métricas e gatilhos mentais aplicados com precisão."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          groups={[
            {
              id: "author-group",              groupTitle: "",              members: [
                {
                  id: "jhonatan",                  title: "Jhonatan Sousa",                  subtitle: "Mais 18 milhões em faturamento",                  detail: "7+ anos de experiência em transformar empresas em máquinas de venda. Certificado em RD Station, Zoho CRM, Tráfego Pago, Automações e especialista em funis de conversão. Já atendeu mais de 70 empresas no Brasil, estados Unidos, Moçambique, Alemanha e Portugal.",                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B50916hkBOTNNMd7JFWEWueGh5/uploaded-1773788858117-rc6otu1r.png",                  imageAlt: "Jhonatan Sousa - Especialista em Vendas"
                }
              ]
            }
          ]}
          ariaLabel="Author section - About Jhonatan Sousa"
        />
      </div>

      <div id="offer" data-section="offer" style={{ paddingBottom: "var(--padding-hero-page-padding)" }}>
        <PricingCardEight
          title="Quanto vale ter previsibilidade de caixa todos os meses?"
          description="Fechando apenas UM novo PDV, o lucro do comodato já paga isso dezenas de vezes. Aqui está exatamente como fazer isso acontecer."
          tag="A Oferta"
          tagIcon={Zap}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "playbook-offer",              badge: "🔥 Oferta de Ação Rápida",              badgeIcon: Sparkles,
              price: "De R$ 297,00 por apenas",              subtitle: "12x R$ 9,70 ou R$ 97,00 à vista",              buttons: [
                { text: "👉 SIM! QUERO GARANTIR MEU PLAYBOOK + BÔNUS" }
              ],
              features: [
                "✅ Playbook Completo de Vendas",                "✅ Scripts Prontos para Copiar e Colar",                "✅ Template de Funil de 4 Estágios",                "✅ Guia com 20 Objeções Resolvidas (respostas que funcionam)",                "✅ Infográficos",                "✅ Consultoria Estratégica de 1 Hora com Jhonatan (bônus para ação rápida)",                "✅ Vídeos Explicativos",                "✅ Apresentações Prontas para Equipe (use com sua operação)",                "✅ Garantia 100% - 7 dias sem perguntas (seu risco é zero)"
              ]
            }
          ]}
          ariaLabel="Offer section - Playbook pricing and bonuses"
        />
      </div>

      <div id="guarantee" data-section="guarantee" style={{ paddingBottom: "var(--padding-hero-page-padding)" }}>
        <SocialProofOne
          names={[
            "Fábrica Sorvetes XYZ",            "Gelato Gourmet Brasil",            "Picolés da Serra",            "Indústria de Sorveteria",            "Frozen Delights Co.",            "Premium Gelato Factory",            "Ice Cream Innovation Hub"
          ]}
          title="Risco 100% Zero. A responsabilidade é toda minha."
          description="7 dias de garantia incondicional. Se o Playbook não transformar sua abordagem de vendas, devolvemos cada centavo. Sem perguntas. Sem complicações."
          tag="Garantia"
          tagIcon={ShieldCheck}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "Quero Minha Garantia de Risco Zero" }
          ]}
          showCard={true}
          ariaLabel="Guarantee section - 100% risk-free guarantee"
        />
      </div>

      <div id="faq" data-section="faq" style={{ paddingBottom: "var(--padding-hero-page-padding)" }}>
        <FaqDouble
          title="Perguntas Frequentes"
          description="Tire suas dúvidas sobre o Playbook e comece a transformar suas vendas hoje"
          tag="FAQ"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqs={[
            {
              id: "faq-1",              title: "Minha fábrica é pequena, isso serve para mim?",              content: "Absolutamente! Quanto menor a fábrica, mais precisa de processos para não depender do dono o tempo todo. Este Playbook é escalável desde 1 até 100+ PDVs. O método funciona para qualquer tamanho."
            },
            {
              id: "faq-2",              title: "Isso funciona só para sorvetes e picolés?",              content: "A lógica de estruturação B2B revelada funciona para qualquer indústria alimentícia e de distribuição. Se você vende para pontos de venda, este método é para você."
            },
            {
              id: "faq-3",              title: "Como vou acessar o e-book?",              content: "Imediatamente por e-mail após a aprovação do seu pagamento. Você terá acesso ao PDF completo, planilhas e todos os bônus em menos de 5 minutos."
            },
            {
              id: "faq-4",              title: "E se eu não gostar? Como funciona a garantia?",              content: "Simples: nos primeiros 7 dias, se o Playbook não atender suas expectativas, envie um email e reembolsamos 100% do valor. Sem burocracia."
            },
            {
              id: "faq-5",              title: "Preciso de experiência em vendas para usar?",              content: "Não! O Playbook é feito para iniciantes e profissionais. Tudo é explicado passo a passo com exemplos reais da indústria."
            },
            {
              id: "faq-6",              title: "Vou receber suporte após a compra?",              content: "Você terá acesso à comunidade privada onde pode tirar dúvidas e compartilhar resultados com outros empresários do setor."
            }
          ]}
          faqsAnimation="slide-up"
          buttons={[
            { text: "👉 QUERO DOMINAR O MERCADO B2B AGORA", href: "#offer" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="FAQ section - Common questions about the playbook"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Produto",              items: [
                { label: "O Playbook", href: "#offer" },
                { label: "Bônus Exclusivos", href: "#offer" },
                { label: "Garantia", href: "#guarantee" }
              ]
            },
            {
              title: "Aprenda",              items: [
                { label: "O Problema", href: "#problem" },
                { label: "A Solução", href: "#solution" },
                { label: "Benefícios", href: "#benefits" }
              ]
            },
            {
              title: "Contato",              items: [
                { label: "Email", href: "mailto:expert@playbook.com" },
                { label: "Suporte", href: "mailto:support@playbook.com" },
                { label: "Comunidade", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacidade", href: "#" },
                { label: "Termos", href: "#" },
                { label: "Cookies", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2024 Playbook de Vendas. Todos os direitos reservados."
          bottomRightText="Feito com ❤️ para Fábricas de Sorvetes"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
