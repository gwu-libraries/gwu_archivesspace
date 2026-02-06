# This fixes the MixedContentParser error globally
require_dependency 'mixed_content_parser' if defined?(require_dependency)