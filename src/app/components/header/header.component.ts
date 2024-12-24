import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink ,ActivatedRoute} from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../responses/user/user.response';
import { NgIf } from '@angular/common';
import { NgbModule, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from '../../services/token.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgbModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  @Output() sendKeywordSearch = new EventEmitter<string>();
  userResponse?:UserResponse | null;
  isPopoverOpen = false;
  keyword: string = '';
  
  togglePopover(event: Event): void{
    event.preventDefault();
    this.isPopoverOpen = !this.isPopoverOpen;
  }
  handleItemClick(index: number): void{
    debugger
    if(index === 0){
      this.router.navigate(['/user-profile'])
    }
    else if(index === 2){
      this.userService.removeUserFromLocalStorage();
      this.tokenService.removeToken();
      this.userResponse = this.userService.getUserResponseFromLocalStorage();
    }
    this.isPopoverOpen = false;
    
  }
  constructor( 
    private userService: UserService,
    private popoverConfig: NgbPopoverConfig,
    private tokenService: TokenService,
    private router: Router

  ){}
  ngOnInit() {
    this.userResponse = this.userService.getUserResponseFromLocalStorage();
  }
  searchProducts(keyword: string){
    this.sendKeywordSearch.emit(keyword);
  }
}