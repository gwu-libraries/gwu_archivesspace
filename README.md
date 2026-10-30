This repository contains the custom plugins used by GW LAI's implementation of ArchivesSpace (managed by Lyrasis) to provide branding, accessibility features, and institutional customizations.

## aspace_plugin_gwu
This is the plugin used by Lyrasis to hold customizations related to branding. It mainly handles the GW logo, footer, and header. Also adds some Lyrasis branding. 

It is included in this repo so that dev instances can match the appearance of production. Also helpful for testing to ensure that overrides from other plugins don't break this one.

**Lyrasis maintains this plugin.** 

## gwu_access_options
This adds a card to all archival object records with an instance (top container or digital object) to provide information about how users can access physical or digital content.

It includes logic to route users to either SCRC or GRC depending on the repository number. 

Most of the card layout and logic is handled in `plugins/gwu_access_options/public/views/shared/_access_options.html.erb`

**LAI is responsible for maintaining this plugin**

## Other Plugins not included
GW LAI currently uses the following plugins, that are not included in this repo:
- name: timewalk
  branch: master
  url: https://github.com/alexduryee/timewalk
- name: aspace-oauth
  url: https://github.com/lyrasis/aspace-oauth

Neither of these plugins are required for a dev instance. Though you may want to use timewalk for any work that might involve creation of date metadata. 

## Deployment & Docker Instructions

For general details on running ArchivesSpace with Docker, refer to the [official ArchivesSpace Docker documentation](https://docs.archivesspace.org/administration/docker/).

### Drop plugins into ArchivesSpace
Clone this repository directly into your local or development ArchivesSpace `plugins` directory.

```
# Clone directly into the plugins folder of your ArchivesSpace directory
cd /path/to/archivesspace
git clone git clone https://github.com/gwu-libraries/gwu_archivesspace.git plugins
```

### Enable plugins in config.rb
Reference the plugins in config/config.rb under AppConfig[:plugins]. Note that loading order dictates priority:

```
AppConfig[:plugins] = [
  'aspace_plugin_gwu',
  'gwu_access_options'
]
```
