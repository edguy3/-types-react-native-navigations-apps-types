import React from "react";

// OK - MANUALLY EDITTED THE GENERATED FILE B/C didnt have time to figure out the various options.
// Someday!

// export namespace NavigationApps {
    interface defaultProps {
        iconSize?: number;
        viewMode?: string;
        row?: boolean;
        viewContainerStyle?: {};
        modalProps?: {};
        modalContainerStyle?: {};
        modalBtnOpenTitle?: string;
        modalBtnCloseTitle?: string;
        modalBtnCloseContainerStyle?: {};
        modalBtnCloseStyle?: {};
        modalBtnCloseTextStyle?: {};
        modalBtnOpenTextStyle?: {};
        modalBtnOpenStyle?: {};
        actionSheetBtnOpenTitle?: string;
        actionSheetBtnCloseTitle?: string;
        actionSheetTitle?: string;
        actionSheetBtnOpenStyle?: {};
        actionSheetBtnOpenTextStyle?: {};
        address?: string;
        disable?: boolean;
    }
    interface propTypes {
        disable_1?: any;
        // export { disable_1 as disable };
        iconSize_1?: any;
        // export { iconSize_1 as iconSize };
        viewMode_1?: any;
        // export { viewMode_1 as viewMode };
        row_1?: any;
        // export { row_1 as row };
        address_1?: any;
        // export { address_1 as address };
        // export containerStyle?: any;
        modalBtnOpenTitle_1?: any;
        // export { modalBtnOpenTitle_1 as modalBtnOpenTitle };
        modalBtnCloseTitle_1?: any;
        // export { modalBtnCloseTitle_1 as modalBtnCloseTitle };
        modalBtnCloseContainerStyle_1?: any;
        // export { modalBtnCloseContainerStyle_1 as modalBtnCloseContainerStyle };
        modalBtnCloseStyle_1?: any;
        // export { modalBtnCloseStyle_1 as modalBtnCloseStyle };
        modalBtnCloseTextStyle_1?: any;
        // export { modalBtnCloseTextStyle_1 as modalBtnCloseTextStyle };
        modalBtnOpenTextStyle_1?: any;
        // export { modalBtnOpenTextStyle_1 as modalBtnOpenTextStyle };
        modalBtnOpenStyle_1?: any;
        // export { modalBtnOpenStyle_1 as modalBtnOpenStyle };
        modalProps_1?: any;
        // export { modalProps_1 as modalProps };
        modalContainerStyle_1?: any;
        // export { modalContainerStyle_1 as modalContainerStyle };
        actionSheetBtnOpenTitle_1?: any;
        // export { actionSheetBtnOpenTitle_1 as actionSheetBtnOpenTitle };
        actionSheetBtnCloseTitle_1?: any;
        // export { actionSheetBtnCloseTitle_1 as actionSheetBtnCloseTitle };
        actionSheetTitle_1?: any;
        // export { actionSheetTitle_1 as actionSheetTitle };
        actionSheetBtnOpenStyle_1?: any;
        // export { actionSheetBtnOpenStyle_1 as actionSheetBtnOpenStyle };
        actionSheetBtnOpenTextStyle_1?: any;
        // export { actionSheetBtnOpenTextStyle_1 as actionSheetBtnOpenTextStyle };
        waze?: any;
        googleMaps?: any;
        maps?: any;
    }
// }


export class NavigationApps extends React.Component<defaultProps | propTypes> {
    constructor(props?: any);
    // state?: {
    //     navApps?: any;
    //     modalVisible?: boolean;
    // };
    actionSheetRef?: any;
    handleNavApp?: (navApp?: any) => Promise<any>;
    renderNavigationApps?: () => any[];
    renderNavigationAppsAsModal?: () => any;
    renderNavigationAppsAsActionSheet?: () => any;
    renderNavigationAppsView?: () => any;
    renderMainView?: () => any;
    // render()?: any;
}
