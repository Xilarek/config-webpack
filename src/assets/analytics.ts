import * as $ from 'jquery';
function createAnalytics(): object {
    let counter = 0;
    let desrtoyed: boolean = false;

    const listener = (): number => counter++;

    $(document).on('click', listener);
    return {
        destroy() {
            $(document).off('click', listener);
            desrtoyed = true;
        }, 

        getClicks() {
            if(desrtoyed) {
                return 'Annalytics is destroyed';
            }
            return counter;
        }
    };
}

window['analytics'] = createAnalytics();