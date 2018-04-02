import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	AllowNewUser = false;
	serverChanged ='server is not created !';
	serverName = "Test";
	serverCreated = false;
  servers = ['testServer', 'testServer2']
  constructor() { 
  	setTimeout(() => { 
  		this.AllowNewUser = true
  	}, 2000);
  }

  ngOnInit() {
  }

  onClick () {
  	this.serverCreated = true;
    this.servers.push(this.serverName);
  	this.serverChanged ='server is created after clicking button server name is: ' + this.serverName;
  }
  inputText(event: Event) {
  	// console.log(event);
  	this.serverName =(<HTMLInputElement>event.target).value
  }

}
