import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@Injectable({
  providedIn: 'root'
})
export class RequsetService {
  constructor(private apollo: Apollo) { }

  handleMutation(mutation) {
    return this.apollo.mutate({mutation: mutation})
  }

  handleQuery(obj) {
    this.apollo
      .watchQuery({
        query: gql`
        {
          users {
            id
            name
            email
            role
          }
        }
      `
      })
      .valueChanges.subscribe(result => {
        console.log("apolllllllllllllllllllllo work")
      });
  }
}
