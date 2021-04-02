import { Component } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-meta-elements',
  templateUrl: './meta-elements.component.html',
})
export class MetaElementsComponent {
  workspaceSlug = 'meta';
  projectSlug = 'elements';
  basePath = environment.basePath ? `${environment.basePath}/meta-elements` : 'meta-elements';
}
