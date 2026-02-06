# aspace_plugin_gwu
This is the plugin used by Lyrasis to hold customizations related to branding. It mainly handles the GW logo, footer, and header. Also adds some Lyrasis branding. 

It is included in this repo so that dev instances can match the appearance of production. Also helpful for testing to ensure that overrides from other plugins don't break this one.

**Lyrasis maintains this plugin.** 

# gwu_access_options
This adds a card to all archival object records with an instance (top container or digital object) to provide information about how users can access physical or digital content.

It includes logic to route users to either SCRC or GRC depending on the repository number. 

All of the card layout and logic is handled in `plugins/gwu_access_options/public/views/shared/_access_options.html.erb`

**LAI is responsible for maintaining this plugin**

# Other Plugins not included
GW LAI currently uses the following plugins, that are not included in this repo:
- name: timewalk
  - branch: master
  - url: https://github.com/alexduryee/timewalk.git
- name: aspace-oauth
   - branch: pin-4.0.0-compat
   - url: https://github.com/lyrasis/aspace-oauth.git
