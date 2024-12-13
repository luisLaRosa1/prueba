hookName=`basename "$0"`

if [ "${HUSKY_DEBUG}" = "true" ]; then
  echo "husky:debug $hookName hookstarted..."
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Can't find node in PATH, trying to find a node binary on your system"
fi
