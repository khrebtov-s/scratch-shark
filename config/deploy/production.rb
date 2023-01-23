server '3.212.12.185',
  user: 'ec2-user',
  roles: %w{web app},
  ssh_options: {
    forward_agent: false,
    auth_methods: %w(publickey password)
  }

  set :rsh, 'ssh -o PasswordAuthentication=no -o StrictHostKeyChecking=no'
  set :rsync_options, {
      source: './build',
      cache: 'cached-copy',
      args: {
        local_to_remote: %W(--rsh #{fetch(:rsh)} -v --compress --recursive --delete --exclude-from=.rsync.exclude --delete-excluded),
        cache_to_release: %w(--archive)
      }
  }

  set :deploy_to, '/var/www/html/frontend'
  set :file_permissions_users, ["ec2-user"]
  set :file_permissions_groups, ["apache"]
  set :build_command, "build"
