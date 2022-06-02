import { NgModule } from '@angular/core';
/// c est pas la peine d 'importer un sous component !!
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { CapEventComponent } from './components/cap-event/cap-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { SearchComponent } from './components/search/search.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayersInfoComponent } from './components/players-info/players-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { SearchWatherComponent } from './components/search-wather/search-wather.component';///1 seul par projet  pour les modules
import { AllTeamsComponent } from './components/all-teams/all-teams.component';




const routes: Routes = [
  //http://localhost:4200/login afficher login.component.html lorsque je note ce puth
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},

 {path:'signUp',component:SignupComponent},
 {path:'cap',component:CapEventComponent},
 {path:'result',component:ResultComponent},
 {path:'news',component:NewsComponent},
 {path:'standing',component:StandingsComponent},
 {path:'blog',component:BlogComponent},
 {path:'matchForm',component:MatchFormComponent},
 {path:'player',component:PlayerFormComponent},
 {path:'editPlayer/:id',component:PlayerFormComponent},

 {path:'teamAdd',component:AddTeamComponent},
 {path:'teamEdit/:id',component:EditTeamComponent},
 {path:'allMatches',component:MatchesComponent},
 {path:'allPlayers',component:PlayersComponent},
 {path:'allTeams',component:TeamsComponent},
 {path:'admin',component:AdminComponent},
 {path:'admin/:staduim',component:AdminComponent},
{path:'searchMatches',component:SearchMatchComponent},
 {path:'matchInfo/:id',component:MatchInfoComponent},
 {path:'addMatch',component:MatchFormComponent},
 {path:'editMatch/:id',component:MatchFormComponent},
 {path:'playersInfo/:id',component:PlayersInfoComponent},
 {path:'teamInfo/:id',component:TeamInfoComponent},
 {path:'addTeam',component:AddTeamComponent},
 {path:'searchByTeam',component:SearchMatchComponent},
 {path:'allMatches/search',component:MatchesComponent},
 {path:'searchWather',component:SearchWatherComponent},
 {path:'apiTeams',component:AllTeamsComponent},//////taba3 API 
 



 //:fi3oudh $ bech trajja3o parametre



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
