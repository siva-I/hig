import Interface from 'interface.json';
import Core from '_core.js';
import Module from 'components/global-nav/side-nav/group/module/module';
import Template from './group.html';
import './group.scss';

/**
 * Creates an Group in a section of the sidenav
 *
 * @class
 */

class Group extends Core {
  constructor(options) {
    super(options);
    this._render(Template, options);
  }

  addModule(ModuleInstance, referenceModule) {
    if (ModuleInstance instanceof Module) {
      this.mountPartialToComment('MODULE', ModuleInstance, referenceModule);
    }
  }

  show() {
    this.el.classList.remove('hig__global-nav__side-nav__section__group--hide');
  }

  hide() {
    this.el.classList.add('hig__global-nav__side-nav__section__group--hide');
  }
}

Group._interface =
  Interface.components.GlobalNav.partials.SideNav.partials.SideNavFull.partials.Group;
Group._defaults = {};
Group._partials = {
  Module
};

export default Group;
