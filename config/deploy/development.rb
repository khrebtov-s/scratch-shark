server '10.1.1.57',
  user: 'jenkins',
  roles: %w{web app},
  ssh_options: {
    forward_agent: false,
    auth_methods: %w(publickey password)
  }
  set :deploy_to, '/var/www/html/scratchshark/frontend'
  set :branch, "development"
  set :file_permissions_paths, ["build"]
  set :file_permissions_users, ["jenkins"]
  set :file_permissions_groups, ["apache"]
  set :build_command, "build-dev"
