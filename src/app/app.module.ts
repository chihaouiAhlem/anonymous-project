import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { BannerComponent } from './components/banner/banner.component';
import { PlayersInfoComponent } from './components/players-info/players-info.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { InfoPlayerComponent } from './components/info-player/info-player.component';
import { SearchWatherComponent } from './components/search-wather/search-wather.component';///1 seul par projet  pour les modules
//import { DataService } from './services/data.service';
///import { InMemoryWebApiModule } from "angular-in-memory-web-api";  //fake BE
import { JwPaginationModule } from 'jw-angular-pagination';
import { AllTeamsComponent } from './components/all-teams/all-teams.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    TeamsComponent,
    MatchesComponent,
    PlayersComponent,
    CapEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    MatchFormComponent,
    PlayerFormComponent,
    AddTeamComponent,
    EditTeamComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    AdminComponent,
    SearchComponent,
    MatchInfoComponent,
    BannerComponent,
    PlayersInfoComponent,
    TeamsTableComponent,
    TeamInfoComponent,
    SearchMatchComponent,
    CustomFilterPipe,
    InfoPlayerComponent,
    SearchWatherComponent,
    AllTeamsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ////importer pour la validation des forms
    FormsModule,////module pour les forms
    ReactiveFormsModule,/// module pour reactive forms,
    HttpClientModule ,///lazem dima mawwjouda
   // InMemoryWebApiModule.forRoot(DataService)
   JwPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
