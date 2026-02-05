import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  User,
  Briefcase,
  ChevronRight,
  Layout,
  Smartphone,
  Zap,
  Layers,
  MessageCircle
} from 'lucide-react';

/**
 * Definição de Tipos para TypeScript
 */
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image?: string;
}

interface TechBadgeProps {
  icon: React.ElementType;
  name: string;
  description: string;
}

/**
 * COMPONENTE: ProjectCard
 */
const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, link, github, image }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full group">
    <div className="h-52 relative overflow-hidden bg-slate-100">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.nextSibling instanceof HTMLElement) {
              target.nextSibling.style.display = 'flex';
            }
          }}
        />
      ) : null}
      <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic bg-slate-100 -z-10">
        Screenshot do Projeto
      </div>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase tracking-wider font-bold rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 border-t border-slate-50 pt-4">
        <a href={github} target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1">
          <Github size={14} /> Repositório
        </a>
        <a href={link} target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1">
          <ExternalLink size={14} /> Demo
        </a>
      </div>
    </div>
  </div>
);

/**
 * COMPONENTE: TechBadge
 */
const TechBadge: React.FC<TechBadgeProps> = ({ icon: Icon, name, description }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group">
    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <h4 className="font-bold text-slate-800 mb-1">{name}</h4>
    <p className="text-xs text-slate-500 leading-tight">{description}</p>
  </div>
);

export default function App() {
  const profileImage = "/MinhaImagem.png";
  const youtubeVideoId = "Q162FvWPbI0";

  const projects: ProjectProps[] = [
    {
      title: 'Safira Digital',
      description: 'Projeto real desenvolvido para minha empresa aplicando conceitos de UX/UI e SEO.',
      tags: ['React', 'Business', 'SEO'],
      github: 'https://github.com/Arcano5/SafiraDigital.git',
      link: 'https://arcano5.github.io/SafiraDigital/',
      image: '/safira-print.png'
    },
    {
      title: 'Verificador de Notas de Alunos',
      description: 'Aplicação funcional para gestão e cálculo de médias escolares de forma offline.',
      tags: ['PWA', 'Service Workers'],
      github: 'https://github.com/Arcano5/Mini-projetos/tree/42a352e14b8e746e9ba0d903031b172a63e90ff4/%23004%20Calcular%20notas',
      link: '#',
      image: '/notasdosalunos.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans text-slate-900 scroll-smooth relative">
      
      {/* WHATSAPP */}
      <a 
        href="https://wa.me/5511992095721" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* HEADER */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-indigo-600">Leonildo</span> Freitas Gomes
          </div>
          <div className="hidden md:flex gap-10">
            {['home', 'sobre', 'projetos', 'tecnologias', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.getElementById(item);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <a href="#contato" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all">
            Contato
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              Disponível para novos desafios
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Front-end <br />
              <span className="text-indigo-600">Developer.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
              Especialista em criar interfaces de alto desempenho, escaláveis e focadas na experiência do usuário final.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('projetos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2"
              >
                Explorar Projetos <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-[40px] rotate-3 absolute inset-0 -z-10"></div>
            <div className="aspect-square bg-slate-200 rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-white flex items-center justify-center">
              <img 
                src={profileImage} 
                alt="Leonildo Freitas Gomes" 
                className="w-full h-full object-cover" 
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const next = target.nextSibling as HTMLElement;
                  if (next) next.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 items-center justify-center bg-indigo-600 text-white font-black text-6xl">
                LG
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-black aspect-video">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100 z-10">
                <p className="text-xs font-black uppercase text-indigo-600 mb-1">Status Atual</p>
                <p className="text-sm font-bold text-slate-800">Finalizando Formação EBAC 🎓</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <User className="text-indigo-600" />
                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Sobre Mim</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Minha jornada no desenvolvimento proporcionou a formalização da minha própria empresa (MEI). O que era uma ferramenta de trabalho tornou-se uma paixão profissional.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                No vídeo ao lado, explico um pouco mais sobre minha transição de carreira e os desafios que superei para dominar o <strong>Front End</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-indigo-600" />
                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Projetos em Destaque</h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="py-32 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Stack Tecnológica</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-900">
          <TechBadge icon={Layout} name="React & Hooks" description="Interfaces modernas com estados otimizados." />
          <TechBadge icon={Smartphone} name="PWA" description="Experiência de app nativo em qualquer navegador." />
          <TechBadge icon={Layers} name="Microfrontends" description="Arquitetura modular para projetos escaláveis." />
          <TechBadge icon={Zap} name="Performance" description="Otimização rigorosa de Web Vitals." />
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-32 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">Vamos construir algo <br /> incrível juntos?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="mailto:leonildogomes.dev@outlook.com" className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all">
              <Mail size={20} /> E-mail
            </a>
            <a href="https://www.linkedin.com/in/leonildo-freitas-gomes-059a3627b"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-indigo-500 text-white border border-indigo-400 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-400 transition-all">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-100 px-6 text-center">
        <div className="text-sm font-bold uppercase tracking-widest text-slate-400">
          © {new Date().getFullYear()} — Leonildo Freitas Gomes
        </div>
      </footer>
    </div>
  );
}