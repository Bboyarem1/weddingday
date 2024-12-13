import { util } from './util.js';
import { like } from './like.js';
import { guest } from './guest.js';
import { theme } from './theme.js';
import { audio } from './audio.js';
import { offline } from './offline.js';
import { comment } from './comment.js';
import { progress } from './progress.js';
import { pagination } from './pagination.js';

document.addEventListener('DOMContentLoaded', () => {
    theme.init();
    audio.init();
    guest.init();
    offline.init();
    progress.init();

    // Safely initialize pagination only if #pagination exists
    if (document.getElementById('pagination')) {
        pagination.init();
    } else {
        console.warn('Pagination element is missing, skipping pagination initialization.');
    }

    window.AOS.init();

    window.like = like;
    window.util = util;
    window.guest = guest;
    window.theme = theme;
    window.audio = audio;
    window.comment = comment;
    window.pagination = pagination;
});
