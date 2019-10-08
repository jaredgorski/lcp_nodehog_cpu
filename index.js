const NodeHog = require('nodehog');
new NodeHog('cpu', 300000, 600000, 3).start();
