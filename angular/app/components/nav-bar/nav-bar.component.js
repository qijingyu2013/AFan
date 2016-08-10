/**
 * Created by qijingyu on 2016-08-09.
 */
class NavBarController {
    constructor ($rootScope, ContextService) {
        'ngInject'

        let navBar = this

        ContextService.me(function (data) {
            navBar.userData = data
        })
    }

    $onInit () {}
}

export const NavBarComponent = {
    templateUrl: './views/app/components/nav-bar/nav-bar.component.html',
    controller: NavBarController,
    controllerAs: 'vm',
    bindings: {}
}

