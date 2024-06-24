import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { RespostaComponent } from './resposta/resposta.component';
import { autorizacaoGuard } from './_guard/autorizacao.guard';
import { PerguntasComponent } from './perguntas/perguntas.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'cadastrar', component: CadastrarComponent},
    {path: 'login', component: LoginComponent},
    {path: 'disciplinas', component: DisciplinasComponent , canActivate: [autorizacaoGuard]},
    {path: 'resposta', component: RespostaComponent , canActivate: [autorizacaoGuard]},
    {path: 'perguntas', component: PerguntasComponent},
    {path: '**', redirectTo: 'home'},


];
