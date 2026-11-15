export type Project = {slug:string; title:string; discipline:string; year:string; description:string; additionalDescription?:string; cover?:string; gallery?:{image:string;alt:string;caption?:string}[]; published:boolean; order:number; seoDescription?:string};
const projectModules = import.meta.glob<{default:Project}>('../content/projects/*.json',{eager:true});
export const projects = Object.values(projectModules).map(m=>m.default).filter(p=>p.published).sort((a,b)=>a.order-b.order);
export const allProjects = Object.values(projectModules).map(m=>m.default);
export const press = Object.values(import.meta.glob<{default:Press}>('../content/press/*.json',{eager:true})).map(m=>m.default).filter(p=>p.published).sort((a,b)=>b.year-a.year);
export const recognition = Object.values(import.meta.glob<{default:Recognition}>('../content/recognition/*.json',{eager:true})).map(m=>m.default).filter(p=>p.published).sort((a,b)=>b.year-a.year || (a.order ?? 100)-(b.order ?? 100));
export type Press={title:string;publication:string;year:number;description:string;url:string;published:boolean;order?:number};
export type Recognition={title:string;year:number;category:string;description?:string;url?:string;published:boolean;order?:number};
